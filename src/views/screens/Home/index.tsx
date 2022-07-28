// Controllers
import useControllers from "@/controllers";
import useComponents from "@/views/components";

const Home = () => {
  // Components
  const { Typography } = useComponents();

  //controllers
  const { useScreenHooks } = useControllers();
  const { useHome } = useScreenHooks();
  const { handleShowToast, name } = useHome();

  return (
    <div className="p-4 text-center space-y-4">
      <Typography
        variant={"h1"}
        className={"font-bold text-5xl leading-tight tracking-tighter"}
      >
        Hello word!
      </Typography>
      <Typography variant={"p"}>
        Example to show name after call API and use Redux, the name is:{" "}
        <b>{name}</b>
      </Typography>
      <button
        onClick={handleShowToast}
        className={"bg-blue-400 rounded-full py-2 px-6 text-white font-black"}
      >
        Click me!
      </button>
    </div>
  );
};

export default Home;
