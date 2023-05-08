import React from "react";
import { z } from "zod";
import { useForm, useFieldArray } from "react-hook-form";

import {
  CreateRevenueContainer,
  CreateRevenueDivision,
  CreateRevenueForm,
  CreateTextField,
  CreateTextFieldInput,
  CreateTextFieldLabel,
} from "@/styles/pages/Revenue/create";
import Header from "@/components/Header";
import { Footer } from "@/components/Footer";
import DropImage from "@/components/DropImage";

const formSchema = z.object({
  foodName: z.string().nonempty().trim(),
  foodDescription: z.string().nonempty().trim(),
  calories: z.string().nonempty().trim(),
  portions: z.number().min(1),
  preparationTime: z.number().min(1),
  ingredients: z.array(
    z.object({ name: z.string().nonempty(), count: z.number().min(1) })
  ),
  preparation: z.array(z.object({ step: z.string().nonempty() })),
});

type Form = z.infer<typeof formSchema>;
const CreateRevenue: React.FC = () => {
  const { register, handleSubmit, control } = useForm<Form>();

  const { append, fields, remove } = useFieldArray({
    name: "ingredients",
    control,
  });

  const {
    append: appendInstruction,
    fields: fieldsIntruction,
    remove: removeIntruction,
  } = useFieldArray({
    name: "preparation",
    control,
  });

  const submit = async (data: Form) => {};

  const addNewIngredient = () => {
    append({ count: 1, name: "" });
  };

  const addNewPreparation = () => {
    appendInstruction({ step: "" });
  };

  return (
    <>
      <Header />
      <CreateRevenueContainer>
        <CreateRevenueForm onSubmit={handleSubmit(submit)}>
          <CreateRevenueDivision>
            <CreateTextField>
              <CreateTextFieldLabel>Nome da comida</CreateTextFieldLabel>
              <CreateTextFieldInput type={"text"} {...register("foodName")} />
            </CreateTextField>
            <CreateTextField>
              <CreateTextFieldLabel>Numero de porções</CreateTextFieldLabel>
              <CreateTextFieldInput type={"text"} {...register("portions")} />
            </CreateTextField>
            <CreateTextField>
              <CreateTextFieldLabel>Calorias</CreateTextFieldLabel>
              <CreateTextFieldInput type={"text"} {...register("calories")} />
            </CreateTextField>
            <CreateTextField>
              <CreateTextFieldLabel>Descrição da comida</CreateTextFieldLabel>
              <CreateTextFieldInput
                type={"text"}
                {...register("foodDescription")}
              />
            </CreateTextField>
            <CreateTextField>
              <CreateTextFieldLabel>Tempo de Preparo</CreateTextFieldLabel>
              <CreateTextFieldInput
                type={"text"}
                {...register("preparationTime")}
              />
            </CreateTextField>
            <DropImage />
          </CreateRevenueDivision>
          <CreateRevenueDivision>
            <div className={"fieldArray"}>
              <CreateTextFieldLabel>
                Ingredientes
                <button type={"button"} onClick={addNewIngredient}>
                  Adicionar
                </button>
              </CreateTextFieldLabel>
              {fields.map((item, index) => (
                <div className="items">
                  <CreateTextField key={item.id}>
                    <CreateTextFieldInput
                      type={"text"}
                      placeholder={"Ex: farinha"}
                      {...register(`ingredients.${index}.name`)}
                    />
                  </CreateTextField>
                  <CreateTextField className="count" key={item.id}>
                    <CreateTextFieldInput
                      className="count"
                      type={"text"}
                      placeholder={"Ex: 1"}
                      {...register(`ingredients.${index}.count`)}
                    />
                  </CreateTextField>
                </div>
              ))}
            </div>
            <div className={"fieldArray"}>
              <CreateTextFieldLabel>
                Preparação
                <button type={"button"} onClick={addNewPreparation}>
                  Adicionar
                </button>
              </CreateTextFieldLabel>
              {fieldsIntruction.map((item, index) => (
                <div className="items">
                  <CreateTextField key={item.id}>
                    <CreateTextFieldInput
                      type={"text"}
                      placeholder={"Ex: Coloque a farinha..."}
                      {...register(`preparation.${index}.step`)}
                    />
                  </CreateTextField>
                </div>
              ))}
            </div>
          </CreateRevenueDivision>
        </CreateRevenueForm>
      </CreateRevenueContainer>

      <Footer />
    </>
  );
};

export default CreateRevenue;
