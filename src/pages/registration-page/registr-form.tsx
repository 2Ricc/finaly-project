import {
      Button,
    FormControl, IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    TextField,
    Typography
} from "@mui/material";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import {useForm, Controller} from "react-hook-form";
import React from "react";
import './register-form.css'


const RegisterForm = () => {
    const {handleSubmit, control} = useForm();
    const onSubmit = () => console.log()

    interface State {
        password: string;
        showPassword: boolean;
    }
    const [values, setValues] = React.useState<State>({ password: '',showPassword:false,});
    const handleChange =
        (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
            setValues({...values, [prop]: event.target.value});
        };
    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };
        return (
            <div className='register-form'>
                <Typography variant="h4" gutterBottom>
                   IT-INCUBATOR
                </Typography>
                <Typography variant="subtitle1" gutterBottom={true} className='register-form_subtitle1'>
                    Sign-Up
                </Typography>
                <form className='register-form-form' onSubmit={handleSubmit(onSubmit)}>
                    <Controller
                        control={control}
                        name='login'
                        render={({field}) => (
                            <TextField
                                label='EMAIL'
                                size='small'
                                margin='normal'
                                className='register-form_input'
                                fullWidth={true}
                                onChange={(e) => field.onChange(e)}
                                value={field.value}
                            />
                        )}
                    />
                    <Typography variant="subtitle1" gutterBottom={true} className='register-form_subtitle1'>
                        Enter your email, or phone number
                    </Typography>
                    <FormControl sx={{m: 1, width: '50ch'}} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={values.showPassword ? 'text' : 'password'}
                            value={values.password}
                            onChange={handleChange('password')}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {values.showPassword ? <VisibilityOff/> : <Visibility/>}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Password"
                        />
                    </FormControl>
                    <FormControl sx={{m: 1, width: '50ch'}} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Confirm Password</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={values.showPassword ? 'text' : 'password'}
                            value={values.password}
                            onChange={handleChange('password')}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {values.showPassword ? <VisibilityOff/> : <Visibility/>}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Password"
                        />
                    </FormControl>
                    <Button
                        type='submit'
                        variant='contained'
                        fullWidth={true}
                        disableElevation={true}
                        sx={{
                            marginTop: 1,
                            margin: 1
                        }}
                    >Cancel
                    </Button>
                    <Button
                        type='submit'
                        variant='contained'
                        fullWidth={true}
                        disableElevation={true}
                        sx={{
                            marginTop: 1,
                            margin: 1
                        }}
                    >Register
                    </Button>
                </form>

            </div>
        )
    }

export default RegisterForm;