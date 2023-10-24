import React, { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { FormProvider, useForm } from 'react-hook-form';

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  const methods = useForm();

  return <FormProvider {...methods}>{children}</FormProvider>;
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
