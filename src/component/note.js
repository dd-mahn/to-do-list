import { format } from "date-fns";

export default function note() {
  const type = "note";
  let title, description;
  const date = format(new Date(), "MM/dd/yyyy");

  const changeValue = (tit, des) => {
    title = tit;
    description = des;
  };

  const getType = () => type;

  const getValue = () => {
    return {
      title,
      description,
      date,
    };
  };

  return {
    changeValue,
    getType,
    getValue,
  };
}
