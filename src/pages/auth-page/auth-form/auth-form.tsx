import React from 'react';
import './auth-form.css';
import {Button, TextField, Typography} from "@mui/material";
import {useForm, Controller, SubmitHandler, useFormState} from "react-hook-form";
import {loginValidation, passwordValidation} from "./validation";

interface ISignInform {
    login: string
    password: string
}

const AuthForm = () => {
    const {handleSubmit, control} = useForm<ISignInform>();
    const {errors} = useFormState({
        control
    })
    const onSubmit: SubmitHandler<ISignInform> = (data) => console.log(data)

    return (
        <div className='auth-form'>
            <Typography variant="h4" gutterBottom>
                Войдите
            </Typography>
            <Typography variant="subtitle1" gutterBottom={true} className='auth-form_subtitle1'>
                Чтобы получить доступ
            </Typography>
            <form className='auth-form_form' onSubmit={handleSubmit(onSubmit)}>
                <Controller
                    control={control}
                    name='login'
                    rules={loginValidation}
                    render={({field}) => (
                        <TextField
                            label='Логин'
                            size='small'
                            margin='normal'
                            className='auth-form_input'
                            fullWidth={true}
                            onChange={(e) => field.onChange(e)}
                            value={field.value}
                            error={!!errors.login?.message}
                            helperText={errors.login?.message}
                        />
                    )}
                />
                <Controller
                    control={control}
                    name='password'
                    rules={passwordValidation}
                    render={({field}) => (
                        <TextField
                            label='Пароль'
                            size='small'
                            margin='normal'
                            className='auth-form_input'
                            fullWidth={true}
                            onChange={(e)=> field.onChange(e)}
                            value={field.value}
                            error={!!errors.password?.message}
                            helperText={errors.password?.message}
                        />
                    )}
                />

                <Button
                    type='submit'
                    variant='contained'
                    fullWidth={true}
                    disableElevation={true}
                    sx={{
                        marginTop: 2
                    }}
                >
                    Войти
                </Button>
            </form>

        </div>
    );
};

export default AuthForm;