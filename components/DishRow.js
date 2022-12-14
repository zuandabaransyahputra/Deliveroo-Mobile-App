import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import Currency from "react-currency-formatter";
import { urlFor } from "../sanity";
import {
  MinusCircleIcon,
  PlusCircleIcon,
} from "react-native-heroicons/outline";
import { useDispatch, useSelector } from "react-redux";
import {
  selectBasketItems,
  addToBasket,
  selectBasketItemsWithId,
  removeFromBasket,
} from "../features/basketSlice";

const DishRow = ({ id, name, description, image, price }) => {
  const [isPressed, setIsPressed] = useState(false);
  const dispatch = useDispatch();

  const items = useSelector((state) => selectBasketItemsWithId(state, id));

  const addItemToBasket = () => {
    dispatch(addToBasket({ id, name, description, image, price }));
  };

  const removeItemFromBasket = () => {
    if (!items.length > 0) return;
    dispatch(removeFromBasket({ id }));
  };

  return (
    <>
      <TouchableOpacity
        onPress={() => setIsPressed(!isPressed)}
        className={`bg-white p-4 border border-gray-200 ${
          isPressed && "border-b-0"
        }`}
      >
        <View className="flex-row">
          <View className="flex-1 pr-2">
            <Text className="text-lg mb-1">{name}</Text>
            <Text className="text-gray-400">{description}</Text>
            <Text className="text-gray-400 mt-2">
              <Currency quantity={price} currency={"IDR"} />
            </Text>
          </View>
          <View>
            <Image
              style={{ borderWidth: 1, borderColor: "#f3f3f4" }}
              source={{ uri: urlFor(image).url() }}
              className="h-20 w-20 bg-gray-300 p-4"
            />
          </View>
        </View>
      </TouchableOpacity>
      {isPressed && (
        <View className="bg-white px-4 py-2">
          <View className="flex-row space-x-2 items-center">
            <TouchableOpacity
              disabled={!items.length}
              onPress={removeItemFromBasket}
            >
              <MinusCircleIcon
                color={items.length > 0 ? "#00ccbb" : "gray"}
                size={40}
              />
            </TouchableOpacity>
            <Text>{items.length}</Text>
            <TouchableOpacity onPress={addItemToBasket}>
              <PlusCircleIcon size={40} color="#00ccbb" />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};

export default DishRow;
