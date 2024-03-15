import { format } from "date-fns";

export default function todo() {
  const type = "todo";
  let title, description, startDate, dueDate, priority;
  let status = false;

  const changeValue = (tit, des, start, due, pri) => {
    title = tit;
    description = des;
    startDate = format(start, "MM/dd/yyyy");
    dueDate = format(due, "MM/dd/yyyy");
    priority = pri;
  };

  const changePriority = (pri) => {
    priority = pri;
  };

  const changeStatus = () => {
    if (status === false) {
      status = true;
    } else {
      status = false;
    }
  };

  const getType = () => type;

  const getValue = () => {
    return {
      title,
      description,
      startDate,
      dueDate,
      priority,
      status,
    };
  };

  return {
    changeValue,
    changeStatus,
    changePriority,
    getType,
    getValue,
  };
}
