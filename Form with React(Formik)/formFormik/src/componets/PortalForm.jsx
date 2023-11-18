import React from "react";
import { Form, Formik } from "formik";
import CustomInput from "./CustomInput";
import CustomSelect from "./CustomSelect";
import { advanceSchema } from "../schemas";
import CustomCheckBox from "./CustomCheckBox";
import { Link } from "react-router-dom";

const onSubmit = async (values, actions) => {
  console.log(values, actions);

  await new Promise(resolve => {
    setTimeout(resolve, 1000);
    actions.resetForm();
  });
};

function PortalForm() {
  return (
    <>
      <Formik
        initialValues={{ username: "", university: "", isAccepted: false }}
        onSubmit={onSubmit}
        validationSchema={advanceSchema}>
        {({ isSubmitting }) => (
          <Form>
            <CustomInput
              label="Kullanıcı Adı"
              name="username"
              type="text"
              placeholder="Kullanıcı Adınızı Giriniz..."
            />
            <CustomSelect
              label="Okulunuz"
              name="university"
              placeholder="Lütfen üniversitenizi yazınız">
              <option value="">Lütfen üniversitenizi seçiniz</option>
              <option value="bogazici">Boğaziçi Üniversitesi</option>
              <option value="gsü">Galatasaray Üniversitesi</option>
              <option value="itü">İstanbul Teknik Üniversitesi</option>
              <option value="gazi">Gazi Üniversitesi</option>
              <option value="odtü">ODTÜ</option>
            </CustomSelect>
            <CustomCheckBox type="checkbox" name="isAccepted" />
            <button
              disabled={isSubmitting}
              type="submit"
              className="saveButton">
              Kaydet
            </button>
            <Link className="formLink" to="/">
              Ana Forma Git
            </Link>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default PortalForm;
