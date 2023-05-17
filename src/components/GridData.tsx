import Input from "./Input";
import placeholder from "../assets/placeholder.png";

interface GridDataProps {
  index: number;
  handleInput: (
    e: React.ChangeEvent<HTMLInputElement>,
    key: string,
    aspect:
      | "aspek_penilaian_1"
      | "aspek_penilaian_2"
      | "aspek_penilaian_3"
      | "aspek_penilaian_4"
  ) => void;
}

const GridData: React.FC<GridDataProps> = ({ index, handleInput }) => {
  return (
    <div className="grid grid-cols-5 gap-4 border p-2">
      <div className="flex items-center gap-2">
        <img className="rounded-full w-7 h-7" src={placeholder} alt="avatar" />
        <p>{`Mahasiswa ${index + 1}`}</p>
      </div>
      <Input
        onChange={(e) => {
          handleInput(e, `mahasiswa_${index + 1}`, "aspek_penilaian_1");
        }}
      ></Input>
      <Input
        onChange={(e) => {
          handleInput(e, `mahasiswa_${index + 1}`, "aspek_penilaian_2");
        }}
      ></Input>
      <Input
        onChange={(e) => {
          handleInput(e, `mahasiswa_${index + 1}`, "aspek_penilaian_3");
        }}
      ></Input>
      <Input
        onChange={(e) => {
          handleInput(e, `mahasiswa_${index + 1}`, "aspek_penilaian_4");
        }}
      ></Input>
    </div>
  );
};

export default GridData;
