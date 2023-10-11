import FormGroup from "@mui/material/FormGroup";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import "./Filter.css";

function FilterComponent({ filterChecking, onFilterChecking }) {
  return (
    <Box>
      <FormControl compoents="fieldset">
        <FormGroup>
          <h4 style={{ color: "#e0ab19", fontStyle: "italic" }}>Color</h4>
          <FormControlLabel
            control={
              <Checkbox
                checked={filterChecking.color.Red}
                onchange={() => onFilterChecking("color", "Red")}
              />
            }
            label="Red"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={filterChecking.color.Blue}
                onChange={() => onFilterChecking("color", "Blue")}
              />
            }
            label="Blue"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={filterChecking.color.Green}
                onChange={() => onFilterChecking("color", "Green")}
              />
            }
            label="Green"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={filterChecking.color.Purple}
                onChange={() => onFilterChecking("color", "purple")}
              />
            }
            label="Pruple"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={filterChecking.color.grey}
                onChange={() => onFilterChecking("color", "Grey")}
              />
            }
            label="Grey"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={filterChecking.color.White}
                onChange={() => onFilterChecking("color", "white")}
              />
            }
            label="White"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={filterChecking.color.Pink}
                onChange={() => onFilterChecking("color", "pink")}
              />
            }
            label="pink"
          />
        </FormGroup>
        <FormGroup>
          <h4 style={{ color: "#e0ab19", fontStyle: "italic" }}>Gender</h4>
          <FormControlLabel
            control={
              <Checkbox
                checked={filterChecking.gender.Men}
                onChange={() => onFilterChecking("gender", "Men")}
              />
            }
            label="Men"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={filterChecking.gender.Women}
                onChange={() => onFilterChecking("gender", "Women")}
              />
            }
            label="Women"
          />
        </FormGroup>
        <FormGroup>
          <h4 style={{ color: "#e0ab19", fontStyle: "italic" }}>Prize Range</h4>
          <FormControlLabel
            control={
              <Checkbox
                checked={filterChecking.price.range1}
                onChange={() => onFilterChecking("price", "range1")}
              />
            }
            label="0 - RS250"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={filterChecking.price.range2}
                onChange={() => onFilterChecking("price", "range2")}
              />
            }
            label="RS250 - Rs450"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={filterChecking.price.range3}
                onChange={() => onFilterChecking("price", "range3")}
              />
            }
            label="RS450+"
          />
        </FormGroup>

        <FormGroup>
          <h4 style={{ color: "#e0ab19", fontStyle: "italic" }}>Type</h4>
          <FormControlLabel
            control={
              <Checkbox
                checked={filterChecking.type.Polo}
                onChange={() => onFilterChecking("type", "Polo")}
              />
            }
            label="Polo"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={filterChecking.type.Hoodies}
                onChange={() => onFilterChecking("type", "Hoodie")}
              />
            }
            label="Hoodie"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={filterChecking.type.Basic}
                onChange={() => onFilterChecking("type", "Basic")}
              />
            }
            label="Basic"
          />
        </FormGroup>
      </FormControl>
    </Box>
  );
}
export default FilterComponent;
