import React, { useEffect, useState } from "react";
import { URLSearchParams } from "next/dist/compiled/@edge-runtime/primitives/url";
import { getData } from "@/translateAPI/api";

export default function Home() {
  const [justCause, setJustCause] = useState(null);

  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  

  useEffect(() => {
    getData('You are gay!', setData, setIsLoading, setError)
  }, []);

  

  return (
    <>
      <div>{!isLoading ? data?.translated_text : 'Loading'}</div>
    </>
  )
}
