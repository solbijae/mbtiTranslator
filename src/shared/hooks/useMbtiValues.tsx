import { validMbti } from "../Mbti";

export const useMbtiValues = (param: {type: string}) => {
  return Object.values(validMbti[param.type as keyof typeof validMbti]);
}