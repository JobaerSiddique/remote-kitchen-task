import { FC, useState } from 'react';
import { Card, CardContent,  Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import { useFood } from '../contexts/FoodProvider';

type FoodItem = {
  id: number;
  name: string;
  description: string;
  price: string;
};

const FoodItemCard: FC<{ item: FoodItem }> = ({ item }) => {
  const { deleteItem, editItem } = useFood();
  const [open, setOpen] = useState(false);
  const [name, setName] = useState(item.name);
  const [description, setDescription] = useState(item.description);
  const [price, setPrice] = useState(item.price);

  const handleEdit = () => {
    editItem({ id: item.id, name, description, price });
    setOpen(false);
  };

  return (
    <Card className="mb-4 transition-transform transform hover:scale-105">
      <CardContent>
        
         <div className="grid gap-2">
          <h1 className="text-lg font-semibold ">{item.name}</h1>
          <p className="text-sm text-gray-500 dark:text-white/60">{item.description}</p>
          <div className="text-lg font-semibold">${item.price}</div>
        </div>
        <Button onClick={() => setOpen(true)} className="relative h-10 w- origin-top transform rounded-lg border-2 border-sky-500 text-xl text-sky-500 before:absolute before:top-0 before:block before:h-0 before:w-full before:duration-500 hover:text-white hover:before:absolute hover:before:left-0 hover:before:-z-10 hover:before:h-full hover:before:bg-sky-500">Edit</Button>
        <Button color="secondary" onClick={() => deleteItem(item.id)}>Delete</Button>
      </CardContent>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Edit Food Item</DialogTitle>
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
          <button onClick={handleEdit} className="rounded-lg bg-slate-800 px-6 py-2 text-[12px] font-semibold text-white duration-300 hover:bg-slate-950 sm:text-sm md:text-base ">Update Food</button>
          <button onClick={() => setOpen(false)} className="rounded-md border border-black px-4 dark:border-white dark:hover:text-slate-800 dark:hover:bg-white  py-2  duration-300 hover:bg-gray-200">Cancel</button>
        </div>
          
        </DialogActions>
      </Dialog>
    </Card>
  );
};

export default FoodItemCard;