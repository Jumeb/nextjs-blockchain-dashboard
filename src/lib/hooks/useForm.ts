'use client'

// import { OptionsType } from '@/components/shared/list/list.component'
import { useState } from 'react'

export const useForm = <T extends Record<string, any>>(initialData: T) => {
  const [formdata, setFormdata] = useState<T>(initialData)

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value })
  }

  const clearValue = (name: string) => {
    setFormdata({ ...formdata, [name]: "" });
  };

  const updateDropForm = (option: any, name: string) => {
    setFormdata({ ...formdata, [name]: option.value })

  }

  return { formdata, onChange, updateDropForm, clearValue, setFormdata }
}