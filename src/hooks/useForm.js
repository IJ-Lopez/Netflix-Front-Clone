import { useState } from "react";

const useForm = (initState, submit) => {
    const [formState, setFormState] = useState(initState);

    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        submit();
    }

    return [formState, handleChange, handleSubmit];
};

export default useForm;