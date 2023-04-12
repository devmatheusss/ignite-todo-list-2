import React, { useEffect, useState } from "react";
import { DataTypes } from "../@types";
import api from "../api";

export default function getTasks() {
  const [data, setData] = useState<DataTypes[]>([]);

  async function fetchAPI() {
    try {
      const res = await api.get("/tasks");
      const data = await res.data;
      setData(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchAPI();
  }, [data]);

  return { data };
}
