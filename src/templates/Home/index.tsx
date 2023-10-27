'use client';

import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { z } from 'zod';
import { registerSchema } from '../../validations/register';
import { zodResolver } from '@hookform/resolvers/zod';
import Label from '../../components/Label';
import Input from '../../components/Input';
import errorMessage from '../../utils/errorMessage';
import ListBox from '../../components/ListBox';
import { CategoryType } from '../../common/types/category';
import handleException from '../../utils/handleException';
import { ItemChecklistType } from '../../common/types/item';
import { Item } from '../../components/Item';
import Checkbox from '../../components/Checkbox';
import Button from '../../components/Button';
import { Plus, Trash2 } from 'lucide-react';
import handleUnit from '../../utils/handleUnit';
import Tag from '../../components/Tag';

export type FormValuesType = z.infer<typeof registerSchema>;
export type HomeProps = {
  units: CategoryType[];
  categories: CategoryType[];
  listItens: ItemChecklistType[];
};

export default function Home({ units, categories, listItens }: HomeProps) {
  const [unitSelected, setUnitSelected] = useState<CategoryType>(units[0]);
  const [categorySelected, setCategorySelected] = useState<
    CategoryType | undefined
  >(categories.find((category) => category.label === 'selecione'));
  const [itens, setItens] = useState<ItemChecklistType[]>(listItens);

  const methods = useForm<FormValuesType>({
    resolver: zodResolver(registerSchema)
  });
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset
  } = methods;

  const handleUnitChange = (category: CategoryType) => {
    setUnitSelected(category);
  };

  const handleCategoryChange = (category: CategoryType) => {
    setCategorySelected(category);
  };

  const addItem = async (data: FormValuesType) => {
    try {
      const obj = Object.assign(data, {
        unit: unitSelected.label,
        category: !categorySelected ? undefined : categorySelected,
        isChecked: false
      });
      await fetch('/api/item', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
      }).then(async (resp) => {
        const respConverted = await resp.json();
        if (respConverted.success === false) {
          handleException('Ocorreu um erro ao salvar o item!');
          return;
        } else {
          const newItem = {
            ...obj,
            id: respConverted.id,
            quantity: Number(obj.quantity)
          };
          setItens((prev) => [...prev, newItem]);
          reset({ name: '', quantity: '' });
        }
      });
    } catch (error: any) {
      console.error(error);
      handleException(error.message);
    }
  };

  const handleIsChecked = async (itemChecked: ItemChecklistType) => {
    try {
      const objCopy = itemChecked;
      const otherItens = itens.filter((item) => item.id !== itemChecked.id);

      itemChecked.isChecked = !itemChecked.isChecked;
      setItens([...otherItens, itemChecked]);

      await fetch('/api/item', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id: itemChecked.id,
          data: { isChecked: { checkbox: itemChecked.isChecked } }
        })
      }).then(async (resp) => {
        const respConverted = await resp.json();
        if (respConverted.success === false) {
          handleException('Ocorreu um erro ao atualizar o item!');
          setItens([...otherItens, objCopy]);
          return;
        }
      });
    } catch (error: any) {
      console.error(error);
      handleException(error.message);
    }
  };

  const removeItem = async (id: string) => {
    try {
      const copyObj = itens;
      const otherItens = itens.filter((item) => item.id !== id);
      setItens(otherItens);

      await fetch('/api/item', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id })
      }).then(async (resp) => {
        const respConverted = await resp.json();

        if (respConverted.success === false) {
          handleException('Ocorreu um erro ao salvar o item!');
          setItens(copyObj);
          return;
        }
      });
    } catch (error: any) {
      console.error(error);
      handleException(error.message);
    }
  };

  const onSubmit = handleSubmit(addItem);

  return (
    <main className="max-w-2xl w-full flex flex-col gap-10">
      <FormProvider {...methods}>
        <section className="w-full flex flex-wrap gap-3 items-start">
          <div className="flex flex-col grow shrink-0 basis-64 gap-3">
            <Label htmlFor="item" required>
              Item
            </Label>
            <Input id="item" name="name" />
            {!!errors.name && errorMessage(errors.name.message)}
          </div>

          <div className="flex flex-col grow shrink-0 basis-20 gap-3">
            <Label htmlFor="quantity" required>
              Quantidade
            </Label>
            <div className="flex">
              <input
                id="quantity"
                type="number"
                className="p-3 text-sm border border-e-0 border-black/20 rounded-s-md grow w-16 focus:border-purple_light focus:outline-purple_light"
                {...register('quantity')}
              />
              <ListBox
                selectedContent={unitSelected}
                handleSetSelectet={handleUnitChange}
                contents={units}
                customClass="rounded-s-none"
              />
            </div>
            {!!errors.quantity && errorMessage(errors.quantity.message)}
          </div>

          <div className="flex flex-col grow shrink-0 basis-42 gap-3">
            <Label htmlFor="category">Categoria</Label>
            <ListBox
              selectedContent={categorySelected}
              handleSetSelectet={handleCategoryChange}
              contents={categories}
            />
          </div>

          <div className="mt-7">
            <Button
              type="button"
              icon={<Plus size={26} />}
              onClick={onSubmit}
            />
          </div>
        </section>
      </FormProvider>

      <section className="flex flex-col gap-3 overflow-y-auto max-h-[32.5rem] pr-3 pb-4">
        {itens.map((item) => (
          <div key={`item-${item.id}`}>
            <Item.Group checked={item.isChecked}>
              <div className="flex gap-4 items-center">
                <Checkbox
                  checked={item.isChecked}
                  onChange={() => handleIsChecked(item)}
                />
                <div className="flex flex-col">
                  <Item.Label checked={item.isChecked}>{item.name}</Item.Label>
                  <Item.Description>
                    {handleUnit(item.unit, item.quantity)}
                  </Item.Description>
                </div>
              </div>

              <div className="flex items-center justify-center gap-3">
                {!!item.category && (
                  <Tag
                    color={item.category?.color || 'blue'}
                    icon={item.category.icon}
                  >
                    {item.category.name}
                  </Tag>
                )}

                <button
                  className="flex relative items-center self-stretch gap-2 p-3 hover:bg-grey_lighter/25 hover:rounded-md"
                  type="button"
                  onClick={() => {
                    removeItem(item.id);
                  }}
                >
                  <Trash2 className="text-red" size={18} />
                </button>
              </div>
            </Item.Group>
          </div>
        ))}
      </section>
    </main>
  );
}
