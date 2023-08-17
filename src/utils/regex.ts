import type { ErrorInput } from '@/@types'

const isEmail = (str: string) => {
  return new RegExp('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$').test(str)
}

const isValidLength = (str: string) => {
  return new RegExp('^[a-zA-z]{3,16}$').test(str)
}

const isValidPassword = (str: string) => new RegExp('^[a-zA-z]{8,16}$').test(str)

export const checkEmail = (
  value: string,
  isSubmit: boolean,
  messageInvalid: string,
  messageEmpty: string
) => {
  if (!isEmail(value) && value.length > 0 && isSubmit) {
    return {
      isValid: false,
      message: messageInvalid
    }
  } else if (value.length === 0 && isSubmit) {
    return {
      isValid: false,
      message: messageEmpty
    }
  }

  return {
    isValid: true,
    message: ''
  }
}

const checkName = (
  value: string,
  isSubmit: boolean,
  messageInvalid: string,
  messageEmpty: string
): ErrorInput => {
  if (value.length === 0 && isSubmit) {
    return {
      isValid: false,
      message: messageEmpty
    }
  }

  if (!isValidLength(value) && isSubmit) {
    return {
      isValid: false,
      message: messageInvalid
    }
  }
  return {
    isValid: true,
    message: ''
  }
}

const checkPassword = (
  value: string,
  isSubmit: boolean,
  messageInvalid: string,
  messageEmpty: string
): ErrorInput => {
  if (value.length === 0 && isSubmit) {
    return {
      isValid: false,
      message: messageEmpty
    }
  }

  if (!isValidPassword(value) && isSubmit) {
    return {
      isValid: false,
      message: messageInvalid
    }
  }
  return {
    isValid: true,
    message: ''
  }
}

export const regex = {
  checkEmail,
  checkName,
  checkPassword
}
