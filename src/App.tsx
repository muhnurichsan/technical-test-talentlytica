import { useState } from "react";
import GridData from "./components/GridData";

function App() {
  const [dataStudents, setDataStudents] = useState({
    aspek_penilaian_1: {
      mahasiswa_1: 1,
      mahasiswa_2: 1,
      mahasiswa_3: 1,
      mahasiswa_4: 1,
      mahasiswa_5: 1,
      mahasiswa_6: 1,
      mahasiswa_7: 1,
      mahasiswa_8: 1,
      mahasiswa_9: 1,
      mahasiswa_10: 1,
    },
    aspek_penilaian_2: {
      mahasiswa_1: 1,
      mahasiswa_2: 1,
      mahasiswa_3: 1,
      mahasiswa_4: 1,
      mahasiswa_5: 1,
      mahasiswa_6: 1,
      mahasiswa_7: 1,
      mahasiswa_8: 1,
      mahasiswa_9: 1,
      mahasiswa_10: 1,
    },
    aspek_penilaian_3: {
      mahasiswa_1: 1,
      mahasiswa_2: 1,
      mahasiswa_3: 1,
      mahasiswa_4: 1,
      mahasiswa_5: 1,
      mahasiswa_6: 1,
      mahasiswa_7: 1,
      mahasiswa_8: 1,
      mahasiswa_9: 1,
      mahasiswa_10: 1,
    },
    aspek_penilaian_4: {
      mahasiswa_1: 1,
      mahasiswa_2: 1,
      mahasiswa_3: 1,
      mahasiswa_4: 1,
      mahasiswa_5: 1,
      mahasiswa_6: 1,
      mahasiswa_7: 1,
      mahasiswa_8: 1,
      mahasiswa_9: 1,
      mahasiswa_10: 1,
    },
  });
  type downloadFileType = {
    data: BlobPart;
    fileName: string;
    fileType: string;
  };
  const downloadFile = ({ data, fileName, fileType }: downloadFileType) => {
    // Create a blob with the data we want to download as a file
    const blob = new Blob([data], { type: fileType });
    // Create an anchor element and dispatch a click event on it
    // to trigger a download
    const a = document.createElement("a");
    a.download = fileName;
    a.href = window.URL.createObjectURL(blob);
    const clickEvt = new MouseEvent("click", {
      view: window,
      bubbles: true,
      cancelable: true,
    });
    a.dispatchEvent(clickEvt);
    a.remove();
  };

  const handleButtonSimpan = () => {
    downloadFile({
      data: JSON.stringify(dataStudents),
      fileName: "students_report.json",
      fileType: "text/json",
    });
  };

  const handleChangeInputAspect = (
    e: React.ChangeEvent<HTMLInputElement>,
    key: string,
    aspect:
      | "aspek_penilaian_1"
      | "aspek_penilaian_2"
      | "aspek_penilaian_3"
      | "aspek_penilaian_4"
  ) => {
    setDataStudents({
      ...dataStudents,
      [aspect]: {
        ...dataStudents[aspect],
        [key]: parseInt(e.target.value),
      },
    });
  };

  return (
    <form
      onSubmit={handleButtonSimpan}
      className="flex flex-col text-center pt-2"
    >
      <h2 className="text-2xl font-semibold">Aplikasi Penilaian Mahasiswa</h2>
      <div className="grid grid-rows-4 w-1/2 mx-auto mt-6">
        <div className="grid grid-cols-5 gap-4">
          <div className="col-span-2 text-end">Aspek penilaian 1</div>
          <div>Aspek penilaian 2</div>
          <div>Aspek penilaian 3</div>
          <div>Aspek penilaian 4</div>
        </div>
        {/* Grid Data */}
        {Object.keys(dataStudents.aspek_penilaian_1).map((_item, index) => {
          return (
            <GridData
              key={`grid-${index}`}
              handleInput={handleChangeInputAspect}
              index={index}
            ></GridData>
          );
        })}
      </div>
      <div className="flex justify-end w-[75%]">
        <button
          type="submit"
          className="bg-black text-white px-2 text-xl mt-10"
        >
          Simpan
        </button>
      </div>
    </form>
  );
}

export default App;
