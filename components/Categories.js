import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import sanityClient, { urlFor } from "../sanity";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  const [categories, setCategories] = useState();

  useEffect(() => {
    sanityClient.fetch(`*[_type == 'category']`).then((data) => {
      setCategories(data);
    });
  }, []);

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingTop: 10, paddingHorizontal: 15 }}
    >
      {categories?.map((category) => (
        <CategoryCard
          key={category._id}
          imgUrl={urlFor(category.image).url()}
          title={category.name}
        />
      ))}
    </ScrollView>
  );
};

export default Categories;
