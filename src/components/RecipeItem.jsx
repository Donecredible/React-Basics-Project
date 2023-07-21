import { Center, Image, Text, VStack, Card } from "@chakra-ui/react";

export const RecipeItem = ({ recipe, onClick }) => {
  const {
    label,
    image,
    dietLabels,
    cautions,
    mealType,
    dishType,
    healthLabels,
  } = recipe;

  return (
    <Card bgColor="white" h="100%">
      <Center
        flexDir="column"
        gap={4}
        cursor="pointer"
        onClick={() => onClick(recipe)}
      >
        <Image
          src={image}
          w="100%"
          h={200}
          objectFit="cover"
          borderTopRadius="md"
          alt={label}
        />
        <VStack align="center" spacing={2} mb="4">
          <Text
            as="span"
            fontWeight={"bold"}
            textTransform={"uppercase"}
            fontSize={11}
            color="gray.500"
          >
            {mealType.join(", ")}
          </Text>
          <Text fontWeight="bold">{label}</Text>
          {dietLabels && (
            <Text fontWeight="bold" color="green.500">
              {dietLabels.join(", ")}
            </Text>
          )}
          {cautions && (
            <Text fontWeight="bold" color="red.500">
              {cautions.join(", ")}
            </Text>
          )}
          <Text>
            <Text as="span" fontWeight="bold" color="purple">
              Dish Type:
            </Text>{" "}
            {dishType.join(", ")}
          </Text>
          {healthLabels && healthLabels.includes("Vegan") && (
            <Text fontWeight="bold" color="orange">
              Vegan
            </Text>
          )}
          {healthLabels && healthLabels.includes("Vegetarian") && (
            <Text fontWeight="bold" color="teal">
              Vegetarian
            </Text>
          )}
        </VStack>
      </Center>
    </Card>
  );
};
