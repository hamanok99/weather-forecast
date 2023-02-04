import {
  FormControl,
  InputLabel,
  MenuItem,
  Select as MuiSelect,
  SelectChangeEvent
} from "@mui/material";

type SelectProps = {
  onChange?: (event: SelectChangeEvent<HTMLInputElement>) => void;
};

export const Select = ({ onChange }: SelectProps) => {
  return (
    <>
      <FormControl sx={{ m: 1, minWidth: 200 }} size="small">
        <InputLabel id="demo-select-small">Area</InputLabel>
        <MuiSelect
          labelId="demo-select-small"
          id="demo-select-small"
          label="Select"
          onChange={onChange}
        >
          <MenuItem value="">選択してください</MenuItem>
          <MenuItem value="011000">宗谷地方</MenuItem>
          <MenuItem value="012000">上川・留萌地方</MenuItem>
          <MenuItem value="016000">石狩・空知・後志地方</MenuItem>
          <MenuItem value="013000">網走・北見・紋別地方</MenuItem>
          <MenuItem value="014100">釧路・根室地方</MenuItem>
          <MenuItem value="015000">胆振・日高地方</MenuItem>
          <MenuItem value="017000">渡島・檜山地方</MenuItem>
          <MenuItem value="020000">青森県</MenuItem>
          <MenuItem value="050000">秋田県</MenuItem>
          <MenuItem value="030000">岩手県</MenuItem>
          <MenuItem value="040000">宮城県</MenuItem>
          <MenuItem value="060000">山形県</MenuItem>
          <MenuItem value="070000">福島県</MenuItem>
          <MenuItem value="080000">茨城県</MenuItem>
          <MenuItem value="090000">栃木県</MenuItem>
          <MenuItem value="100000">群馬県</MenuItem>
          <MenuItem value="110000">埼玉県</MenuItem>
          <MenuItem value="130000">東京都</MenuItem>
          <MenuItem value="120000">千葉県</MenuItem>
          <MenuItem value="140000">神奈川県</MenuItem>
          <MenuItem value="200000">長野県</MenuItem>
          <MenuItem value="190000">山梨県</MenuItem>
          <MenuItem value="220000">静岡県</MenuItem>
          <MenuItem value="230000">愛知県</MenuItem>
          <MenuItem value="210000">岐阜県</MenuItem>
          <MenuItem value="240000">三重県</MenuItem>
          <MenuItem value="150000">新潟県</MenuItem>
          <MenuItem value="160000">富山県</MenuItem>
          <MenuItem value="170000">石川県</MenuItem>
          <MenuItem value="180000">福井県</MenuItem>
          <MenuItem value="250000">滋賀県</MenuItem>
          <MenuItem value="260000">京都府</MenuItem>
          <MenuItem value="270000">大阪府</MenuItem>
          <MenuItem value="280000">兵庫県</MenuItem>
          <MenuItem value="290000">奈良県</MenuItem>
          <MenuItem value="300000">和歌山県</MenuItem>
          <MenuItem value="330000">岡山県</MenuItem>
          <MenuItem value="340000">広島県</MenuItem>
          <MenuItem value="320000">島根県</MenuItem>
          <MenuItem value="310000">鳥取県</MenuItem>
          <MenuItem value="360000">徳島県</MenuItem>
          <MenuItem value="370000">香川県</MenuItem>
          <MenuItem value="380000">愛媛県</MenuItem>
          <MenuItem value="390000">高知県</MenuItem>
          <MenuItem value="350000">山口県</MenuItem>
          <MenuItem value="400000">福岡県</MenuItem>
          <MenuItem value="440000">大分県</MenuItem>
          <MenuItem value="420000">長崎県</MenuItem>
          <MenuItem value="410000">佐賀県</MenuItem>
          <MenuItem value="430000">熊本県</MenuItem>
          <MenuItem value="450000">宮崎県</MenuItem>
          <MenuItem value="460100">鹿児島県</MenuItem>
          <MenuItem value="471000">沖縄本島地方</MenuItem>
          <MenuItem value="472000">大東島地方</MenuItem>
          <MenuItem value="473000">宮古島地方</MenuItem>
          <MenuItem value="474000">八重山地方</MenuItem>
        </MuiSelect>
      </FormControl>
    </>
  );
};
