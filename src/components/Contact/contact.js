import React, { useRef, useState } from 'react'
import { Form, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import emailjs from '@emailjs/browser'; const Contact = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const form = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submissionSuccess, setSubmissionSuccess] = useState(false);
    const onSubmit = async (data) => {
        if (isSubmitting || submissionSuccess) {
            toast.warning('Response has Already been Submitted', {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 5000,
            });
            return;
        }
        try {
            setIsSubmitting(true);
            const result = await emailjs.sendForm(
                process.env.REACT_APP_SERVICE_ID,
                process.env.REACT_APP_TEMPLATE_ID,
                form.current,
                process.env.REACT_APP_PUBLIC_KEY
            );

            console.log(result);

            toast.success(`Email Sent Successfully`, {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 5000,
            });
            setSubmissionSuccess(true);
        } catch (error) {
            console.error(error);

            toast.error(`Something Went Wrong, Please Try Again.`, {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 5000,
            });
        } finally {
            setIsSubmitting(false);
        }

    };
    return (
        <form ref={form} className='d-flex ms-2 w-100 px-3 justify-content-center ' onSubmit={handleSubmit(onSubmit)}>
            <div className='w-25 mt-5'>
                <Form.Group className="mb-3">
                    <Form.Label className='d-flex text-white'>Name</Form.Label>
                    <Form.Control type="text"  {...register('user_name', { required: 'Name is required' })} placeholder="Enter your name" />
                    <div className='my-1 d-flex'>{errors.user_name && <span className='text-danger'>{errors.user_name.message}</span>}</div>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label className='d-flex  text-white'>Email</Form.Label>
                    <Form.Control type="email"  {...register('user_email', { required: 'Email is required' })} name="user_email" placeholder="Enter your email" />
                    <div className='my-1 d-flex'>{errors.user_email && <span className='text-danger'>{errors.user_email.message}</span>}</div>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label className='d-flex  text-white'>Message</Form.Label>
                    <Form.Control as="textarea" name="message" rows={3}  {...register('message', { required: 'Message is required' })} placeholder="Enter your message" />
                    <div className='my-1 d-flex'>{errors.message && <span className='text-danger'>{errors.message.message}</span>}</div>
                </Form.Group>
                <div className="d-flex justify-content-center mb-2">
                    <Button variant="primary" type="submit">
                        {isSubmitting ? 'Submitting...' : 'Submit'}
                    </Button>
                </div>
            </div>
        </form>
    )
}


export default Contact