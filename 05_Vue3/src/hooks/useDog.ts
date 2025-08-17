import axios from "axios";
import { reactive } from "vue";

export default function () {
  const dogList = reactive<string[]>([]);

  async function getDog() {
    try {
      const url = "https://dog.ceo/api/breed/pembroke/images/random";
      const result = await axios.get(url);
      if (result.data.message) {
        dogList.push(result.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return { dogList, getDog };
}
