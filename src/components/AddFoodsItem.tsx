import { FC, useState } from 'react';
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { useFood } from '../contexts/FoodProvider';
import {IoIosAddCircleOutline}  from "react-icons/io";
const AddFoodItem: FC = () => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const { addItem } = useFood();
  

  const handleSubmit = () => {
    addItem({ id: Date.now(), name, description, price });
    setOpen(false);
    setName('');
    setDescription('');
    setPrice('');
  };

  return (
    <div className="my-10 ">
      <Button variant="contained" color="primary" onClick={() => setOpen(true)}>
     <span className='mr-2'> <IoIosAddCircleOutline /></span> Add New Item
      </Button>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Add New Food Item</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Name"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Description"
            fullWidth
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Price"
            fullWidth
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
         
         
          <div className="flex gap-4">
          <button onClick={handleSubmit} className="rounded-lg bg-slate-800 px-6 py-2 text-[12px] font-semibold text-white duration-300 hover:bg-slate-950 sm:text-sm md:text-base ">ADD Item</button>
          <button onClick={() => setOpen(false)} className="rounded-md border border-black px-4 dark:border-white dark:hover:text-slate-800 dark:hover:bg-white  py-2  duration-300 hover:bg-gray-200">Cancel</button>
        </div>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddFoodItem;