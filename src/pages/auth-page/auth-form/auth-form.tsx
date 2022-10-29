import React from 'react';
import './auth-form.css';
import {Button, Input, TextField, Typography} from "@mui/material";
import {useForm, Controller} from "react-hook-form";

const AuthForm = () => {
    const {handleSubmit, control} = useForm();
    const onSubmit = () => console.log()
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
               render={({field})=>(
                   <TextField
                       label='Логин'
                       size='small'
                       margin='normal'
                       className='auth-form_input'
                       fullWidth={true}
                       onChange={(e)=> field.onChange(e)}
                       value={field.value}
                   />
               )}
               />
                <Controller
                    control={control}
                    name='login'
                    render={({field})=>(
                        <TextField
                            label='Пароль'
                            type='password'
                            size='small'
                            margin='normal'
                            className='auth-form_input'
                            fullWidth={true}
                            value={field.value}
                        />
                    )}
                />

                <Button
                    type='submit'
                    variant='contained'
                    fullWidth={true}
                    disableElevation={true}
                    sx={{
                        marginTop:2
                    }}
                >
                    Войти
                </Button>
            </form>

        </div>
    );
};

export default AuthForm;