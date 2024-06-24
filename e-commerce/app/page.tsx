"use client"

import CompaniesDropdown from "./_components/CompaniesDropdown";
import CategoriesDropdown from './_components/CategoriesDropdown'
import SearchButton from "./_components/Button";

import { useState } from "react";

export default async function Home() {
  const [company, setCompany] = useState("")
  const [category, setCategory] = useState("")

  return (
    <main className="mt-4 p-4 max-w-[30rem] m-auto min-h-screen">
      <div className="flex gap-4 mt-8 flex ">
        <CompaniesDropdown setCompany={setCompany} /> 
        <CategoriesDropdown setCategory={setCategory}/> 
        <SearchButton />
      </div>
    </main>
  );
}
