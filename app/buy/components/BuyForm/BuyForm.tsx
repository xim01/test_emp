import Select from "./components/Select";
import RangeSlider from "./components/RangeSlider";
import FileUpload from "./components/FileUpload";

export default function BuyForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    alert("Отправлено");
  };

  return (
    <div id="buy_form_wrapper">
      <form onSubmit={handleSubmit}>
        <div className="buy_form_row">
          <Select />

          <input type="email" name="email" placeholder="Ваш e-mail" required />
          <input type="text" name="name" placeholder="Ваше имя" required />
        </div>

        <div className="buy_form_row_2">
          <RangeSlider />
          <FileUpload />
        </div>

        <div className="file_row_center">
          <div className="buy_form_button_wrapper">
            <button className="blue_button" type="submit">
              ОТПРАВИТЬ
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
