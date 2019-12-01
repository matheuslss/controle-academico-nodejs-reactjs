import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    width: 200,
  }
}));

export default function CustomSelect(props) {
  const classes = useStyles();

  const { id, label, valor, opcoes, onChange } = props;

  return (
      <FormControl className={classes.formControl}>
        <InputLabel id={`lbl_${id}`}>{label}</InputLabel>
        <Select
          labelId={`lbl_${id}`}
          id={id}
          value={valor}
          onChange={onChange}
        >
          {opcoes.map((op, key) => (
            <MenuItem key={key} value={op.valor}>{op.label}</MenuItem>
          ))}

        </Select>
      </FormControl>
    )
}