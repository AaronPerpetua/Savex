import React, { useState } from "react";
import { Modal, View, Text, TextInput, TouchableOpacity } from "react-native";
import { supabase } from '../utils/supabase';


type Props = {
  visible: boolean;
  onClose: () => void;
  onSave: (data: { item: string; amount: string; description: string }) => void;
};

const TransactionModal: React.FC<Props> = ({ visible, onClose, onSave }) => {
  const [item, setItem] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");

  const handleSave = () => {
    if (!item || !amount) return;
    onSave({ item, amount, description });
    setItem("");
    setAmount("");
    setDescription("");

  };

  const createTransaction = async ()=> {

  const { error } = await supabase
  .from('transactions')
  .insert({ user_id: "22cfd727-2e19-4b27-b20f-3ebb71f35708", 
    description: description,
    type: 'Expense',
    amount:amount,
    name: item})
    
    if(error){
      console.log(error.message)
    }else{
      alert("Trasaction Completed")
    }

    setItem("");
    setAmount("");
    setDescription("");
    
};

  return (
    <Modal visible={visible} animationType="slide" transparent >
      <View className="flex-1 justify-center items-center bg-black/40">
        <View className="w-11/12 bg-white dark:bg-neutral-900 p-6 rounded-2xl shadow-lg">
          <Text className="text-xl font-semibold text-center text-neutral-800 dark:text-white mb-4">
            Add Transaction
          </Text>

          <TextInput
            placeholder="Item name"
            value={item}
            onChangeText={setItem}
            className="border border-neutral-300 dark:border-neutral-700 rounded-xl p-3 mb-3 text-neutral-900 dark:text-white"
            placeholderTextColor="#9ca3af"
            
          />

          <TextInput
            placeholder="Amount"
            value={amount}
            onChangeText={setAmount}
            keyboardType="numeric"
            className="border border-neutral-300 dark:border-neutral-700 rounded-xl p-3 mb-3 text-neutral-900 dark:text-white"
            placeholderTextColor="#9ca3af"
          />

          <TextInput
            placeholder="Description"
            value={description}
            onChangeText={setDescription}
            multiline
            className="border border-neutral-300 dark:border-neutral-700 rounded-xl p-3 mb-4 text-neutral-900 dark:text-white h-20"
            placeholderTextColor="#9ca3af"
          />

          <View className="flex-row justify-between">
            <TouchableOpacity
              onPress={onClose}
              className="flex-1 mr-2 py-3 rounded-xl bg-neutral-200 dark:bg-neutral-700"
            >
              <Text className="text-center text-neutral-800 dark:text-white font-medium">
                Cancel
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={createTransaction}
              className="flex-1 ml-2 py-3 rounded-xl bg-indigo-600"
            >
              <Text className="text-center text-white font-semibold">
                Save
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default TransactionModal;
