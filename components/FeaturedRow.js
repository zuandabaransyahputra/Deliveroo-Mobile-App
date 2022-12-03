import { View, Text, ScrollView } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";

const FeaturedRow = ({ title, description, featureCategory, id }) => {
  return (
    <View>
      <View className="flex-row px-4 mt-4 justify-between items-center">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00ccbb" />
      </View>
      <Text className="text-xs text-gray-500 px-4">{description}</Text>
      <ScrollView
        horizontal
        contentContainerStyle={{ paddingHorizontal: 15 }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        <RestaurantCard
          id="123"
          title="Udon With Nasi Goreng"
          imgUrl="https://links.papareact.com/gn7"
          rating={4.5}
          genre="Japanese"
          address="Darussalam"
          short_description="Delicious food"
          dishes={[]}
          long={20}
          lat={12}
        />
        <RestaurantCard
          id="123"
          title="Udon With Nasi Goreng"
          imgUrl="https://links.papareact.com/gn7"
          rating={4.5}
          genre="Japanese"
          address="Darussalam"
          short_description="Delicious food"
          dishes={[]}
          long={20}
          lat={12}
        />
        <RestaurantCard
          id="123"
          title="Udon With Nasi Goreng"
          imgUrl="https://links.papareact.com/gn7"
          rating={4.5}
          genre="Japanese"
          address="Darussalam"
          short_description="Delicious food"
          dishes={[]}
          long={20}
          lat={12}
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
