import * as yup from "yup";
const regexPassword = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

export const basicSchema = yup.object().shape({
  email: yup
    .string()
    .email("Geçerli bir email yazınız")
    .required("Zorunlu Alan(*)"),
  age: yup
    .number()
    .positive()
    .integer()
    .max(130, "lütfen geçerli bir yaş giriniz")
    .min(1, "lütfen geçerli bir yaş giriniz")
    .required("Zorunlu Alan(*)"),
  password: yup
    .string()
    .min(6, "şifre minimum 6 karakter olmalıdır")
    .matches(regexPassword, {
      message:
        "Şifreniz en az bir harf, bir rakam ve özel karakter içermelidir",
    })
    .required("Zorunlu Alan(*)"),
  repassword: yup
    .string()
    .oneOf([yup.ref("password")], "Şifreler Eşleşmiyor")
    .required("Zorunlu Alan(*)"),
});

export const advanceSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, "Kullanıcı adı minimum 3 karakter uzunlunğunda olmalıdır")
    .required("Lütfen bir kullanıcı adı girin"),
  university: yup
    .string()
    .oneOf(
      ["bogazici", "gsü", "itü", "gazi", "odtü"],
      "lütfen üniversitenizi seçiniz"
    )
    .required("Zorunlu Alan(*)"),
  isAccepted: yup
    .boolean()
    .oneOf([true], "Kullanım koşullarını kabul ediniz")
    .required("Zorunlu Alan(*)"),
});
