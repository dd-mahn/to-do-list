import project from "../project";

const today = () => {
  const todayObj = Object.create(project());

  todayObj.changeValue("Today", `You can store your today's to-dos here`);

  return todayObj;
};

const todayObj = today();

export default todayObj;
