"use client";

import { JSX } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { redirect } from "next/navigation";

import { newRssFeedSchema, newRssFeedValues } from "@/schema/formsSchema";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Field, FieldError, FieldLabel } from "../ui/field";

export default function NewRssFeed(): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<newRssFeedValues>({
    resolver: zodResolver(newRssFeedSchema),
  });

  const onSubmit = (data: newRssFeedValues) => {
    console.log(data);
    redirect(`feeds/${data.rssName}`);
  };

  return (
    <div className="flex min-h-svh items-center justify-center">
      <Card>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Field>
              <FieldLabel>Insert subreddit name</FieldLabel>
              <Input placeholder="subreddit" {...register("rssName")} />
              <FieldError>{errors.rssName?.message}</FieldError>
            </Field>
            <Button type="submit">Submit</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
