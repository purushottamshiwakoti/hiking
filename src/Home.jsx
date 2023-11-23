import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import MapView, { Marker, Callout } from "react-native-maps";
import { Appbar } from "react-native-paper";
import useAuthStore from "./hooks/useAuthStore";

export default function Home() {
  const { name, logout } = useAuthStore();
  const bhaktapurRegion = {
    latitude: 27.6527386,
    longitude: 85.2456554,
    latitudeDelta: 2,
    longitudeDelta: 2,
  };

  const hikes = [
    {
      title: "Dhap Dam",
      latitude: 27.8059889,
      longitude: 85.4529815,
      latitudeDelta: 2,
      longitudeDelta: 2,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/f/f0/Photowalk_WLE_2023_in_Nepal_-_Shivapuri_National_Park_08.jpg",
      description:
        "Dhap Dam is a concrete faced rockfill dam located in Bagmati Province of Nepal. The dam is 24 m high and 175 m wide. It can store 850,000 m3 of water when full.",
    },

    {
      title: "Lakuri Bhanjyang",
      latitude: 27.6170973,
      longitude: 85.4036163,
      latitudeDelta: 2,
      longitudeDelta: 2,
      image:
        "https://i0.wp.com/imfreee.com/wp-content/uploads/2020/06/Lakuri-Bhanjyang-Nepal.jpg?ssl=1",
      description:
        "Lakuri Bhanjyang is a popular destination near Kathmandu Valley for trekkers, hikers, and all those who love walking. The hill station offers a wide range of trekking trails from easy to difficult. The trail to the top of the hill is adventurous that takes you through the dense green forests.",
    },
    {
      title: "Chisapani",
      latitude: 27.8253485,
      longitude: 85.4457512,
      latitudeDelta: 2,
      longitudeDelta: 2,
      image:
        "https://www.odysseytreksnepal.com/wp-content/uploads/2021/02/sundarijal-scaled.jpg",
      description:
        "Experience stunning views of the northern mountains of the Himalayas and hike through forests of pine and oak on a trek of the Kathmandu Valley. See the oldest temple of the valley, visit a village of the Tamang ethnic people, and more.",
    },
    {
      title: "Phulchowki",
      latitude: 27.5711208,
      longitude: 85.3952292,
      latitudeDelta: 2,
      longitudeDelta: 2,
      image:
        "https://www.gokyotreksnepal.com/wp-content/uploads/2022/07/Phulchowki-hill-tour.jpg",
      description:
        "It is the tallest hill surrounding Kathmandu valley. The top reaches 2700m. This is an all day hike and is fairly demanding if you are recreational hiker. The trail starts steep with concrete stairs and goes through a dense forest.",
    },
    {
      title: "White Gumba",
      latitude: 27.5713461,
      longitude: 85.2403538,
      latitudeDelta: 2,
      longitudeDelta: 2,
      image:
        "https://www.wondersofnepal.com/wp-content/uploads/2020/09/White-Monastery2.jpg",
      description:
        "White Gumba's physical attributes include a sizable stupa, prayer wheels, and a number of buildings that serve as residences for monks and tourists. The stupa, which is the centerpiece of the monastery, is decorated with vibrant prayer flags and elaborate carvings. The stupa's outside circle is surrounded by prayer wheels that can be spun to send blessings out into the surrounding area. Just outside of Kathmandu, Nepal, on the Nagarjun Hill is where White Gumba rests in all its splendor.",
    },
    {
      title: "Shivapuri",
      latitude: 27.7993813,
      longitude: 85.2917958,
      latitudeDelta: 2,
      longitudeDelta: 2,
      image:
        "https://www.apexasiaholidays.com/wp-content/uploads/2018/10/IMG_8420.jpg",
      description:
        "Shivapuri Day Hiking is a perfect day Hiking near Kathmandu to see the Langtang Himalayan range as well as enjoy the nature around Kathmandu. The Shivapuri National park is one of the water resources for the citizen who is living in Kathmandu and is also home to thousands of flora and fauna, Thus it is also a paradise for those who love to see the birds. The Shivapuri is the second-highest hill station in the Kathmandu valley after Pulchowki.",
    },
    {
      title: "Nagarkot",
      latitude: 27.7144742,
      longitude: 85.4786966,
      latitudeDelta: 2,
      longitudeDelta: 2,
      image:
        "https://www.treks-in-nepal.com/uploads/2018/11/chisapani-nagarkot-hiking.jpg",
      description:
        "Nagarkot hiking is easy, short hiking inside forest, Nepalese inhabitants and the hidden valley. Explore the great views of the Himalayas including Annapurna, Manaslu, Ganesh Himal, Langtang, Dorje Lakpa and Gauri Shanker and Everest ranges. The view from Nagarkot is like mountain flight.",
    },
    {
      title: "Champadevi",
      latitude: 27.3086159,
      longitude: 86.203853,
      latitudeDelta: 2,
      longitudeDelta: 2,
      image:
        "https://www.lifedreamadventure.com/public/uploads/champadevi-hiking.jpg",
      description:
        "Elevating at an altitude of 2249m, Champadevi is the third highest hill and another best hiking place in Kathmandu. The hike to Champadevi covers around 20km and passes through the dense forest consisting of pine, bamboo, rhododendron, and ethnic Newari settlements of Khokana, Bungamati, Pharping. These Newari settlements are considered as the historical places of Nepal.",
    },
    {
      title: "Jamacho",
      latitude: 27.7451212,
      longitude: 85.2642153,
      latitudeDelta: 2,
      longitudeDelta: 2,
      image:
        "https://altitudehimalaya.com/media/files/Blog/Activities/Nagarjun-Jamacho-Gompa-Hiking.jpeg",
      description:
        "The Jamacho hill is famous for the Buddhist shrine and monastery located at the hilltop. Since the hill is located inside the Shivapuri Nagarjun National Park, the hiking route traverses through the wilderness of the national park itself.",
    },
    {
      title: "Tarebhir",
      latitude: 27.7804769,
      longitude: 85.383843,
      latitudeDelta: 2,
      longitudeDelta: 2,
      image:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/d2/73/43/tarey-bhir.jpg?w=1200&h=-1&s=1",
      description:
        "A perfect location to enjoy with nature and beautiful view point to see the wonderful scenic Kathmandu valley & Shivapuri National Park which takes you away from the noisy and busy Kathmandu city life.",
    },
    {
      title: "Chandragiri",
      latitude: 27.6859264,
      longitude: 85.1919261,
      latitudeDelta: 2,
      longitudeDelta: 2,
      image:
        "https://admin.buddhaair.com/upload/blog/mainimage/1560141176_l1jdI_Chandragiri-and-kathmandu-valley-mountain-range.jpg",
      description:
        "Located in the southwest part of the valley, Chandragiri is one of the best hiking routes in Kathamndu to enjoy the sights of Everest and the entire valley. The hill is also known for the cable car ride that takes you to the hilltop temple, Bhaleshwor Mahadev temple.",
    },
  ];

  return (
    <View style={{ flex: 1 }}>
      <Appbar.Header>
        <Appbar.Action icon="home" onPress={() => {}} color="red" />
        <Appbar.Content
          title={name && name}
          style={{ alignItems: "center" }}
          color="red"
        />
        <Appbar.Action
          icon="logout"
          color="red"
          onPress={() => {
            logout();
            alert("Successfully logged out");
          }}
        />
      </Appbar.Header>

      <View style={styles.mapContainer}>
        {/* Render our MapView */}
        <MapView
          style={styles.map}
          // Specify our coordinates
          initialRegion={bhaktapurRegion}
        >
          <Marker
            coordinate={{
              latitude: 27.8059889,
              longitude: 85.4529815,
              latitudeDelta: 2,
              longitudeDelta: 2,
            }}
          >
            <Callout tooltip>
              <View style={styles.card}>
                {/* <Image
                  source={{
                    uri: "https://upload.wikimedia.org/wikipedia/commons/f/f0/Photowalk_WLE_2023_in_Nepal_-_Shivapuri_National_Park_08.jpg",
                  }}
                  style={{ width: "100%", height: 200 }}
                  resizeMode="cover" // Adjust the height as needed
                /> */}
                <Text style={styles.title}>Dhap Dam</Text>
                <Text style={styles.description} numberOfLines={6}>
                  Dhap Dam is a concrete faced rockfill dam located in Bagmati
                  Province of Nepal. The dam is 24 m high and 175 m wide. It can
                  store 850,000 m3 of water when full.
                </Text>
              </View>
            </Callout>
          </Marker>
          <Marker
            coordinate={{
              latitude: 27.6170973,
              longitude: 85.4036163,
              latitudeDelta: 2,
              longitudeDelta: 2,
            }}
          >
            <Callout tooltip>
              <View style={styles.card}>
                <Text style={styles.title}>Lakuri Bhanjyang</Text>
                <Text style={styles.description} numberOfLines={6}>
                  Lakuri Bhanjyang is a popular destination near Kathmandu
                  Valley for trekkers, hikers, and all those who love walking.
                  The hill station offers a wide range of trekking trails from
                  easy to difficult. The trail to the top of the hill is
                  adventurous that takes you through the dense green forests.
                </Text>
                <Image
                  source={{
                    uri: "https://i0.wp.com/imfreee.com/wp-content/uploads/2020/06/Lakuri-Bhanjyang-Nepal.jpg?ssl=1",
                  }}
                  style={{ width: "100%", height: 20 }}
                />
              </View>
            </Callout>
          </Marker>
          <Marker
            coordinate={{
              latitude: 27.8253485,
              longitude: 85.4457512,
              latitudeDelta: 2,
              longitudeDelta: 2,
            }}
          >
            <Callout tooltip>
              <View style={styles.card}>
                <Text style={styles.title}>Chisapani</Text>
                <Text style={styles.description} numberOfLines={6}>
                  Experience stunning views of the northern mountains of the
                  Himalayas and hike through forests of pine and oak on a trek
                  of the Kathmandu Valley. See the oldest temple of the valley,
                  visit a village of the Tamang ethnic people, and more.
                </Text>
                <Image
                  source={{
                    uri: "https://www.odysseytreksnepal.com/wp-content/uploads/2021/02/sundarijal-scaled.jpg",
                  }}
                  style={{ width: "100%", height: 20 }}
                />
              </View>
            </Callout>
          </Marker>
          <Marker
            coordinate={{
              latitude: 27.5711208,
              longitude: 85.3952292,
              latitudeDelta: 2,
              longitudeDelta: 2,
            }}
          >
            <Callout tooltip>
              <View style={styles.card}>
                <Text style={styles.title}>Phulchowki</Text>
                <Text style={styles.description} numberOfLines={6}>
                  It is the tallest hill surrounding Kathmandu valley. The top
                  reaches 2700m. This is an all day hike and is fairly demanding
                  if you are recreational hiker. The trail starts steep with
                  concrete stairs and goes through a dense forest.
                </Text>
                <Image
                  source={{
                    uri: "https://www.gokyotreksnepal.com/wp-content/uploads/2022/07/Phulchowki-hill-tour.jpg",
                  }}
                  style={{ width: "100%", height: 20 }}
                />
              </View>
            </Callout>
          </Marker>
          <Marker
            coordinate={{
              latitude: 27.5713461,
              longitude: 85.2403538,
              latitudeDelta: 2,
              longitudeDelta: 2,
            }}
          >
            <Callout tooltip>
              <View style={styles.card}>
                <Text style={styles.title}>White Gumba</Text>
                <Text style={styles.description} numberOfLines={6}>
                  White Gumba's physical attributes include a sizable stupa,
                  prayer wheels, and a number of buildings that serve as
                  residences for monks and tourists. The stupa, which is the
                  centerpiece of the monastery, is decorated with vibrant prayer
                  flags and elaborate carvings. The stupa's outside circle is
                  surrounded by prayer wheels that can be spun to send blessings
                  out into the surrounding area. Just outside of Kathmandu,
                  Nepal, on the Nagarjun Hill is where White Gumba rests in all
                  its splendor.
                </Text>
                <Image
                  source={{
                    uri: "https://www.wondersofnepal.com/wp-content/uploads/2020/09/White-Monastery2.jpg",
                  }}
                  style={{ width: "100%", height: 20 }}
                />
              </View>
            </Callout>
          </Marker>
          <Marker
            coordinate={{
              latitude: 27.7993813,
              longitude: 85.2917958,
              latitudeDelta: 2,
              longitudeDelta: 2,
            }}
          >
            <Callout tooltip>
              <View style={styles.card}>
                <Text style={styles.title}>Shivapuri</Text>
                <Text style={styles.description} numberOfLines={6}>
                  Shivapuri Day Hiking is a perfect day Hiking near Kathmandu to
                  see the Langtang Himalayan range as well as enjoy the nature
                  around Kathmandu. The Shivapuri National park is one of the
                  water resources for the citizen who is living in Kathmandu and
                  is also home to thousands of flora and fauna, Thus it is also
                  a paradise for those who love to see the birds. The Shivapuri
                  is the second-highest hill station in the Kathmandu valley
                  after Pulchowki.
                </Text>
                <Image
                  source={{
                    uri: "https://www.apexasiaholidays.com/wp-content/uploads/2018/10/IMG_8420.jpg",
                  }}
                  style={{ width: "100%", height: 20 }}
                />
              </View>
            </Callout>
          </Marker>
          <Marker
            coordinate={{
              latitude: 27.7144742,
              longitude: 85.4786966,
              latitudeDelta: 2,
              longitudeDelta: 2,
            }}
          >
            <Callout tooltip>
              <View style={styles.card}>
                <Text style={styles.title}>Nagarkot</Text>
                <Text style={styles.description} numberOfLines={6}>
                  Nagarkot hiking is easy, short hiking inside forest, Nepalese
                  inhabitants and the hidden valley. Explore the great views of
                  the Himalayas including Annapurna, Manaslu, Ganesh Himal,
                  Langtang, Dorje Lakpa and Gauri Shanker and Everest ranges.
                  The view from Nagarkot is like mountain flight.
                </Text>
                <Image
                  source={{
                    uri: "https://www.treks-in-nepal.com/uploads/2018/11/chisapani-nagarkot-hiking.jpg",
                  }}
                  style={{ width: "100%", height: 20 }}
                />
              </View>
            </Callout>
          </Marker>
          <Marker
            coordinate={{
              latitude: 27.3086159,
              longitude: 86.203853,
              latitudeDelta: 2,
              longitudeDelta: 2,
            }}
          >
            <Callout tooltip>
              <View style={styles.card}>
                <Text style={styles.title}>Champadevi</Text>
                <Text style={styles.description} numberOfLines={6}>
                  Elevating at an altitude of 2249m, Champadevi is the third
                  highest hill and another best hiking place in Kathmandu. The
                  hike to Champadevi covers around 20km and passes through the
                  dense forest consisting of pine, bamboo, rhododendron, and
                  ethnic Newari settlements of Khokana, Bungamati, Pharping.
                  These Newari settlements are considered as the historical
                  places of Nepal.
                </Text>
                <Image
                  source={{
                    uri: "https://www.lifedreamadventure.com/public/uploads/champadevi-hiking.jpg",
                  }}
                  style={{ width: "100%", height: 20 }}
                />
              </View>
            </Callout>
          </Marker>
          <Marker
            coordinate={{
              latitude: 27.7451212,
              longitude: 85.2642153,
              latitudeDelta: 2,
              longitudeDelta: 2,
            }}
          >
            <Callout tooltip>
              <View style={styles.card}>
                <Text style={styles.title}>Jamacho</Text>
                <Text style={styles.description} numberOfLines={6}>
                  The Jamacho hill is famous for the Buddhist shrine and
                  monastery located at the hilltop. Since the hill is located
                  inside the Shivapuri Nagarjun National Park, the hiking route
                  traverses through the wilderness of the national park itself.
                </Text>
                <Image
                  source={{
                    uri: "https://altitudehimalaya.com/media/files/Blog/Activities/Nagarjun-Jamacho-Gompa-Hiking.jpeg",
                  }}
                  style={{ width: "100%", height: 20 }}
                />
              </View>
            </Callout>
          </Marker>
          <Marker
            coordinate={{
              latitude: 27.7804769,
              longitude: 85.383843,
              latitudeDelta: 2,
              longitudeDelta: 2,
            }}
          >
            <Callout tooltip>
              <View style={styles.card}>
                <Text style={styles.title}>Tarebhir</Text>
                <Text style={styles.description} numberOfLines={6}>
                  A perfect location to enjoy with nature and beautiful view
                  point to see the wonderful scenic Kathmandu valley & Shivapuri
                  National Park which takes you away from the noisy and busy
                  Kathmandu city life.
                </Text>
                <Image
                  source={{
                    uri: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/d2/73/43/tarey-bhir.jpg?w=1200&h=-1&s=1",
                  }}
                  style={{ width: "100%", height: 20 }}
                />
              </View>
            </Callout>
          </Marker>
          <Marker
            coordinate={{
              latitude: 27.6859264,
              longitude: 85.1919261,
              latitudeDelta: 2,
              longitudeDelta: 2,
            }}
          >
            <Callout tooltip>
              <View style={styles.card}>
                <Text style={styles.title}>Chandragiri</Text>
                <Text style={styles.description} numberOfLines={6}>
                  Located in the southwest part of the valley, Chandragiri is
                  one of the best hiking routes in Kathamndu to enjoy the sights
                  of Everest and the entire valley. The hill is also known for
                  the cable car ride that takes you to the hilltop temple,
                  Bhaleshwor Mahadev temple.
                </Text>
                <Image
                  source={{
                    uri: "https://admin.buddhaair.com/upload/blog/mainimage/1560141176_l1jdI_Chandragiri-and-kathmandu-valley-mountain-range.jpg",
                  }}
                  style={{ width: "100%", height: 20 }}
                />
              </View>
            </Callout>
          </Marker>
        </MapView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mapContainer: {
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  card: {
    backgroundColor: "white",
    borderRadius: 10,
    width: 400, // Adjust the width as needed
    padding: 10,
    elevation: 4, // For shadow on Android
    shadowColor: "#000", // For shadow on iOS
    shadowOffset: { width: 0, height: 30 }, // For shadow on iOS
    shadowOpacity: 0.25, // For shadow on iOS
    shadowRadius: 3.84, // For shadow on iOS
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
  },
  description: {
    marginTop: 5,
    fontSize: 14,
  },
  image: {
    width: "100%",
    height: 100, // Adjust the height as needed
    borderRadius: 5,
    marginTop: 5,
  },
});
