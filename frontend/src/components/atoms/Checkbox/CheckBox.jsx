import "./_index.scss";

export const CheckBox = ({ id, onChange }) => {
  return (
    <div class="checkbox-wrapper-46">
      <input class="inp-cbx" id="cbx-46" type="checkbox" />
      <label class="cbx" for="cbx-46">
        <span>
          <svg width="12px" height="10px" viewbox="0 0 12 10">
            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
          </svg>
        </span>
        <span>Checkbox</span>
      </label>
    </div>
  );
};

export const CheckBox_1 = ({ id, label }) => {
    return (
      <div class="checkBox">
        <input class="inp-cbx" id="cbx-46" type="checkbox" />
        <label class="cbx" for="cbx-46">
          <span>
            <svg width="12px" height="10px" viewbox="0 0 12 10">
              <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
            </svg>
          </span>
          <span> {label} </span>
        </label>
      </div>
    );
  };
