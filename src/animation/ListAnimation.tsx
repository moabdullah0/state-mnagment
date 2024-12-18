import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ListItemProps {
  item: string;
  onDelete: (item: string) => void;
}

const ListItem: React.FC<ListItemProps> = ({ item, onDelete }) => {
  return (
    <motion.li
      className="p-4 mb-2 bg-gray-800 text-white rounded-lg"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      <div className="flex justify-between items-center">
        <span>{item}</span>
        <button
          onClick={() => onDelete(item)}
          className="px-3 py-1 bg-red-500 text-white rounded-full hover:bg-red-400"
        >
          حذف
        </button>
      </div>
    </motion.li>
  );
};

const DynamicList: React.FC = () => {
  const [items, setItems] = useState<string[]>(['أبجد', 'هوز', 'حطي']);

  const addItem = () => {
    setItems((prevItems) => [...prevItems, `عنصر جديد ${prevItems.length + 1}`]);
  };

  const deleteItem = (item: string) => {
    setItems((prevItems) => prevItems.filter((i) => i !== item));
  };

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between mb-6">
        <button
          onClick={addItem}
          className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-400"
        >
          إضافة عنصر
        </button>
      </div>

      <AnimatePresence>
        <motion.ul>
          {items.map((item) => (
            <ListItem key={item} item={item} onDelete={deleteItem} />
          ))}
        </motion.ul>
      </AnimatePresence>
    </div>
  );
};

export default DynamicList;
