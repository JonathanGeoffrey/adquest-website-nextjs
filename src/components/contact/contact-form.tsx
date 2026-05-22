import Image from "next/image"
import { useRef, useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import Input from "../common/input/input"
import TextArea from "../common/input/textarea"
import Button from "../common/button"
import egg from '../../../public/egg.png'
import ReCAPTCHA from "react-google-recaptcha";
import { useLang } from "@/utils/lang";

interface ContactInputs {
  name: string
  email: string
  message: string
  publisher: string
}

const HeroContactForm = () => {
  const lang = useLang()
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [isVerified, setIsVerified] = useState(false);

  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)


  async function handleCaptchaSubmission(token: string | null) {
    try {
      if (token) {
        await fetch("/api/captcha", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ token }),
        });
        setIsVerified(true);
      }
    } catch (e) {
      setIsVerified(false);
    }
  }

  const handleChange = (token: string | null) => {
    handleCaptchaSubmission(token);
  };

  function handleExpired() {
    setIsVerified(false);
  }

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ContactInputs>()

  const onSubmit: SubmitHandler<ContactInputs> = async (data) => {
    if (!isVerified) {
      setErrorMessage(lang === 'en' ? 'Please verify that you are not a robot.' : 'Mohon verifikasi bahwa Anda bukan robot.')
      return
    }
    
    setIsLoading(true)
    const apiEndpoint = '/api/email';

    fetch(apiEndpoint, {
      method: 'POST',
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((response) => {
        setIsSuccess(true)
      })
      .catch((err) => {
        setErrorMessage(lang === 'en' ? 'Failed to send message. Please try again later.' : 'Gagal mengirim pesan. Silakan coba lagi nanti.')
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  return isSuccess ? (
    <div className='text-green-500'>{lang === 'en' ? 'Message sent successfully!' : 'Pesan berhasil dikirim!'}</div>
  ) : (
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4 relative'>
      {isLoading && (
        <div className='w-full h-full bg-gray-200/60 absolute flex items-center justify-center'>
          <Image src={egg} alt="Egg" height={80} className="absolute animate-bounce" />
        </div>
      )}
      {errorMessage && (
        <div className='text-red-500'>{errorMessage}</div>
      )}
      <div className='flex w-full gap-4'>
        <Input
          label={lang === 'en' ? 'Name' : 'Nama'}
          type='text'
          placeholder='e.g. John Doe'
          className='flex-1'
          useFormRegister={register("name", { required: true })}
          errorMessage={errors.name?.message}
        />
        <Input
          label='Email'
          type='email'
          placeholder='e.g. johndoe@example.com'
          className='flex-1'
          useFormRegister={register("email", { required: true })}
          errorMessage={errors.email?.message}
        />
      </div>
      <Input
        label='Game Studio/Publisher'
        type='text'
        placeholder='e.g. My Game & Co.'
        className='flex-1'
        useFormRegister={register("publisher", { required: true })}
        errorMessage={errors.email?.message}
      />
      <TextArea
        label={lang === 'en' ? 'Your Message' : 'Pesan Anda'}
        placeholder={lang === 'en' ? 'Enter your message here...' : 'Masukkan pesan anda disini...'}
        rows={5}
        useFormRegister={register("message", { required: true })}
        errorMessage={errors.message?.message}
      />
      <ReCAPTCHA
        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
        ref={recaptchaRef}
        onChange={handleChange}
        onExpired={handleExpired}
      />
      <Button
        enableAnimation={false}
        buttonType='button'
        disabled={!isVerified}
      >
        {lang === 'en' ? 'Send Message' : 'Kirim Pesan'}
      </Button>
    </form>
  )
}

export default HeroContactForm
