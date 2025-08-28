import { useEffect, useState } from "react";
const useForm = <T>(initState: T) => {
  const [formData, setFormData] = useState<T>(initState);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  useEffect(() => {
    setFormData(initState);
  }, [initState]);

  return {
    formData,
    handleInputChange,
    ...formData,
  };
};

export default useForm;
