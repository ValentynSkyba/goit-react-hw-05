import { Field, Form, Formik } from "formik";
import s from "./SearchBar.module.css";

const SearchBar = ({ onSearchQuery, setPage, notify }) => {
  const initialValues = {
    query: "",
  };

  function onSubmit(data, options) {
    if (!data.query) {
      notify();
    }
    setPage(1);
    onSearchQuery(data.query);
    options.resetForm();
  }
  return (
    <header>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form className={s.form}>
          <Field
            className={s.input}
            type="text"
            placeholder="Search photos..."
            name="query"
          />
          <button className={s.btn} type="submit">
            Search
          </button>
        </Form>
      </Formik>
    </header>
  );
};

export default SearchBar;
