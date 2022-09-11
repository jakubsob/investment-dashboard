import React from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import Input from './Input';
import ErrorMessage from './ErrorMessage';
import axios from 'axios';
const { PUBLIC_API_URL } = import.meta.env;

const schema = yup.object({
  assetName: yup.string().trim().required(),
  price: yup.number().positive().required(),
  amount: yup.number().positive().required(),
  currency: yup.string().trim().length(3).uppercase().required(),
  date: yup.date().default(() => new Date()),
  category: yup.string().trim().required(),
  portfolio: yup.string().trim().required(),
}).required();

export default function TransactionForm() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = data => {
    axios
      .post(`${PUBLIC_API_URL}/post`, data)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
      <form
        className="w-full"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          label="Asset name"
          id="assetName"
          register={register}
          registerProps={{ required: true }}
        />
        <ErrorMessage message={errors.assetName && "Asset name must be a string"}></ErrorMessage>
        <Input
          id="price"
          label="Price"
          inputProps={{ type: "number" }}
          register={register}
          registerProps={{ required: true, min: 0 }}
        />
        <ErrorMessage message={errors.price && "Price must be a positive number"}></ErrorMessage>
        <Input
          id="amount"
          label="Amount"
          inputProps={{ type: "number" }}
          register={register}
          registerProps={{ required: true, min: 0 }}
        />
        <ErrorMessage message={errors.amount && "Amount must be a positive number"}></ErrorMessage>
        <Input
          id="currency"
          label="Currency"
          register={register}
          registerProps={{ required: true, maxLength: 3 }}
        />
        <ErrorMessage message={errors.currency && "Currency must be a 3 letter symbol"}></ErrorMessage>
        <Input
          label="Date"
          id="date"
          register={register}
          registerProps={{ required: true }}
        />
        <ErrorMessage message={errors.date && "Date must be in yyyy/mm/dd format"}></ErrorMessage>
        <Input
          id="category"
          label="Category"
          register={register}
          registerProps={{ required: true }}
        />
        <ErrorMessage message={errors.category && "Category must be a string"}></ErrorMessage>
        <Input
          id="portfolio"
          label="Portfolio"
          register={register}
          registerProps={{ required: true }}
        />
        <ErrorMessage message={errors.portfolio && "Portfolio must be a string"}></ErrorMessage>
        <input
          className="rounded-md p-2 w-full
          bg-blue-600 text-white hover:bg-blue-700"
          type="submit"
          value="Send"
        />
      </form>
    </div>
  )
}
