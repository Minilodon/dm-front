import React from "react";
import {
  DamageType,
  WeaponFragment,
  WeaponType,
  useCreateWeaponMutation,
  useUpdateWeaponMutation,
} from "../../../../../generated/graphql";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../../../../../components/Button/Button";
import { useDrawerContext } from "../../../../../contexts/DrawerContext";

type CreateWeaponFormValues = {
  name: string;
  description: string;
  type: WeaponType;
  cost: number;
  dmgType: DamageType;
  damageDice: number;
  diceQuantity: number;
  weight: number;
  weaponImage: string | null | undefined;
};

const weaponSchema = yup.object({
  name: yup.string().required(),
  description: yup.string().required(),
  type: yup.string<WeaponType>().required(),
  cost: yup.number().required().required(),
  dmgType: yup.string<DamageType>().required(),
  damageDice: yup.number().required().required(),
  diceQuantity: yup.number().required(),
  weight: yup.number().required(),
  weaponImage: yup.string().url().nullable(),
});

function AddWeaponDrawer() {
  const { closeDrawer } = useDrawerContext();
  const { control, handleSubmit, watch } = useForm<CreateWeaponFormValues>({
    resolver: yupResolver(weaponSchema),
    defaultValues: {
      cost: 0,
      damageDice: 8,
      description: "",
      diceQuantity: 1,
      dmgType: DamageType.Slashing,
      name: "",
      type: WeaponType.MartialMelee,
      weaponImage:
        "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQEBITEhMSFRIVFRUTEBATEhgXEBEXFxYYGBYTFRYYHSggGBwlHxUVIjIhJSkrLi4wGB8zODMtNyguLisBCgoKDg0OGhAQFy0mHR4tLSsrLSstLS0tLS0tLS0tLS0rLS0tKy0rLS0rLS0tLS0tNy0rNy0rLS03LSsrKy0rK//AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABwECBAYIBQP/xAA6EAACAQIDBAgFAwMDBQAAAAAAAQIDEQQhMQUGEkEHEyJRYXGBkRQjMqHBsdHwQlJicqLhM0NjgvH/xAAZAQEAAwEBAAAAAAAAAAAAAAAAAgMEBQH/xAAhEQEAAwEBAQEBAAIDAAAAAAAAAQIRAxIhBDFCcRMUQf/aAAwDAQACEQMRAD8AnEAAAAALZMqzS+k/eKpg8PGNF2q1W4qXOEUs5LxzS9TyZexGzjL3j37wWBlwTk51edOmryj/AKnovK9zF2T0lbOrvhlOdKTdl1kbR8O1G6RBTTbbebd229XfVstsV+5a/wDrRjqelVUknFpp5prR+TPoiCNwN8quDqRpVG5YeTScXrTu0uKP7aE50qikk07p5prRk6zrNfnNJfQAEkAAAAAAAAAAAAAAAAAAAAAAAAAAAAABRkV9NVJuWGfK1Ret1+5Kpq/SFsb4rBz4VepS+bDvdl2o+qv9jyY+J0nLRKB3U4oJPWOV+bWqv5XfufKdNp2eqdmfWvT4WVqp2T9Pbn/O4ol06z8Y1rEgdG++Tw81h68m6M3aMn/2pOyX/q/saG8wo2ETknTlF4dQxknoXkedF29DrwWGqv5kF8uT1lFJdnzX6eRISL4nXLtWazkqgA9RAAAAAAAAAAAAAAAAAAAAAAAAAAALZIuKNAQV0h7BeGxclFfLqdum+SvrH0f4NYb+Xa6yd7c1fLLwJ7302AsZhml/1IXnTfO9s4+pBGLhwzlFq2ed+XIpvDofnv6jHwoxbeR91Rd09VrdeuXuvdF0MPF6ST18O+1vYvw6a/Gfl/x/tfIjjW+2wse8PiIVI5cM015X0/B0Js/FRrUoVIO8ZxUk/NXObJq0n55PvXIlfos27xQeFm81edLxX9Ufz7kqW+4xfq57HqEjAoipcwgAAAAAAAAAAAAAAAAAAAAAAAAAAAACkiIOlPd7qq3XwXYq/VZZRnnf319GTAzA2zs2GJozpTWUlZPnF8pLxTPJjYT53mltc6Ur5fjwszLgm32VfJtW17lbvs8rePifTbuyamGrShLWLtdaNcmvDT3MSjjJKUX3S4tMr3z/AAUT8+OtWfUbD41r8Tb15+fP8no7B2k6FWE4vtRkpRfJeD8HpbzL8VQVXiqx1lJyccrJSlK33t7mFVpRSVr35prv5r3PJ2Pr2axaMdC7G2lTxNKNSDTTWa/tfOL8j0CF+jveJ4asqc38qpaMv8ZPKM/w/MmaDuX1t6hyu3OedsXAAkqAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGl9Im7/X0uuhH5lNdpLWUFd+rWvuQ7Up8Es1dX0OlJq6Ig3+3a+HqccE+rndx/wd7uL/AAV3rv1r/L1yfMtc2ZiY8WaVvp4W7RcXyb5LNK/K0Rtygo1XZSj/AIy1j4GFR4Y63UuXNc8mvsezUqqvRU2lKVJRgov6nF3cU++1reTRXu1mHRiMtEx/HhwfC015k6blbV+JwkJN9uPYn4taP1RBtZ3ZunRhtV06/VN9iorWeiktH+PUhytllH6+W19JeBamXGtygAAAAAAAAAAAAAAAAAAAAAAAAAAAABQwdsbNhiaUqc1k9Hzi+TRnlGDc+oB3h2PUw9ScJKzi8nyl3NeDumYOAr8MoyvazzfLlbL0Jf392Kq9B1Irt01d21lHNv219WQ/OPA5d2lvXu5mbpXJdb83X3XJZOKw0bcSvZ8TXik3Y+GFqSpyTV00/Jr+MrhcVLKLd1pb72Xr+pZUvzvfnfUpmYj7DZNdiYlOu6u1fisNCo3eVuGf+panskQ9Hm3+oq9XN9io0n3RlomS5B3NlLeocPvznnfFwAJqQAAAAAAAAAAAAAAAAAAAAAAAAAAAABbUimmvchffrYMsNXbUflTvKD5Zv6fNfsTSzyt4tlRxVCVN5PWErfTJaPyI2rsLuPTxaJQVgrWWT4k78Sv6eun81pKd2753bv337zK2phZ4acoTjZq6kr5eK8skzAbvn/GZLxnx3OUxaNhkYeXDK/5Ju3U2n8RhoSf1JcM/Nc/VWINSv7e5vHR1tlU6vVydoztHPk19L+9vU942ycZf28vVdj/xKoLUy42OOAAAAAAAAAAAAAAAAAAAAAAAAAAAAABRoqANK6Qt3lXpddCPbgu3bnHvt3oiSrBxdpcstdU8r/ozo2auiIukPdz4eanBfJqN8P8A45PNx8nqinpTW78ffzPmWp0qujtlrbvT5fYyYKUZRcGrxz7r55euvsYMZWytp+hkYWpdrkub+z/PuZf46s/YTlu1tRYrDwqf1WtNd0lqesiN9wceqeJnRv2aiuk8lxL97kkJmznb1Vwu/PxeYVABYpAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwdr7PhiaU6U1eMlZ96fJrxWTM4oHsTjn/eTZM8JWlTnrF9mXKcXpJef7nmUp25+xNW/uwFisNKUY3rU03Teja/qj9iE5XUrMy9aZLsfl7+65P9bDhNouDo1ItccbpvmrZomrZuLjWpQqR0kk/LvXoc/Umnz815/xe5JfRnta8Z4eTzXbp3/3L8+442yclT+3nseoSCC1MuNTmAAAAAAAAAAAAAAAAAAAoyoAAAAAAAAAAAAWyWREXSVuz1NTr6a+XN9pLSE3+JfqS+Yu0MHCvTlTqLihNWkvyvEjauxizl0mltc7Uaq9bW/nfq/Y93Y+OdGdKtD6oStOOl//AL2l7GHvLsSWCxEqc78OsJ/3xekkY+DrKbstWu/VxWX2v7GSY8y68THSn+3QWExMasIzg7xklKL70zINH6NtqKVOWHk+1DtU/wDKEs8vJv7m8Gus7GuP0r5tMAAJIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUaKgDV9+93fjcO+FfNp3lSff3w9be5BtObhLus/XXP8+50zJEPdKG7PU1fiqa+XUfzEtIT733KX6lXSu/Wv8AN28z5l5m7W1Xh61Krn2JWqc7wll+jf2JxpTTSad080+TRzjgaqtn5NPnf9iYujvbHXYd0pO86OXi4u/C/s16EeM58T/VT/KG4AIF7CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGJtTAwxFKdKavCceGX7ryMsowbjnHbezJ4KvOhU1i8pcpRecZfzx7j3Ny9tfC4qM5P5cuxV8U+fv8Aobt0p7ufEUOvgr1aX1Jazptq/qtfcinAy4na+q7/AH9f2M9q+Z10edv+SmS6RpyTSad09H3lxpnRztvr6HUzd6lFJeMof0v00NyRfE7DBavmcVAB6iAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAsnFNZ/8ED79bEeAxkuFNUpvrKPctLx9G/su8npmq9Im7/xuDkoK9Wn26Xe/wC6PqvukRtXYW8r+bIz3b2s8NXp14/TdqcV/a/qX88CccLXjUgpxacZJOMlo0+Zzjs6qu1Sl2ZP6W1nGa5ettO+xM24WOj8LQpptpwcoyf96k+sh4WbVl3EKf3Fv6Ij+tuBS5UtZQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAo0VAEH9LWxXh8YsRCNqdbO6Wk46+TevuX7n7yQpKXWN8OVWko8q0V2oeCmrexLG8WwqWOoSo1b8LzUl9cGtJRfeafsforoUanFUrSqwTuqfCoxdtFN814KxCYndX16RNcs3rZeJdWjSm1ZzhCTXc2rsyy2EbFxNQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWgB4rEqAHoAAAAAAAD/2Q==",
      weight: 0,
    },
  });
  const [createWeaponMutation, { loading }] = useCreateWeaponMutation({
    refetchQueries: "all",
  });
  const updateWeapon = async (data: CreateWeaponFormValues) => {
    if (!data) return;
    try {
      await createWeaponMutation({
        variables: { payload: data },
      });
    } catch (error) {
      console.log(error);
    } finally {
      closeDrawer();
    }
  };
  const currentImage = watch("weaponImage");
  return (
    <div className="w-full h-full flex flex-col">
      <form
        className="flex flex-col py-4 gap-y-2 w-full h-full"
        onSubmit={handleSubmit(updateWeapon)}
      >
        <Controller
          control={control}
          name="name"
          render={({ field, fieldState }) => (
            <TextField
              value={field.value}
              onChange={field.onChange}
              label="Nome"
              error={!!fieldState.error?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="description"
          render={({ field, fieldState }) => (
            <TextField
              value={field.value}
              onChange={field.onChange}
              label="Descrição"
              error={!!fieldState.error?.message}
            />
          )}
        />
        <div className="flex items-center gap-x-2">
          <Controller
            control={control}
            name="type"
            render={({ field }) => (
              <FormControl fullWidth>
                <InputLabel>Tipo</InputLabel>
                <Select
                  value={field.value}
                  label="Tipo"
                  onChange={field.onChange}
                  defaultValue={WeaponType.MartialMelee}
                >
                  <MenuItem value={WeaponType.MartialMelee}>
                    Marcial - Corpo a corpo
                  </MenuItem>
                  <MenuItem value={WeaponType.MartialRanged}>
                    Marcial - À distância
                  </MenuItem>
                  <MenuItem value={WeaponType.SimpleMelee}>
                    Simples - Corpo a corpo
                  </MenuItem>
                  <MenuItem value={WeaponType.SimpleRanged}>
                    Simples - À distância
                  </MenuItem>
                </Select>
              </FormControl>
            )}
          />
          <Controller
            control={control}
            name="cost"
            render={({ field, fieldState }) => (
              <TextField
                value={field.value}
                onChange={field.onChange}
                label="Custo (PC)"
                type="number"
                error={!!fieldState.error?.message}
              />
            )}
          />
        </div>
        <div className="flex items-center gap-x-2">
          <Controller
            control={control}
            name="dmgType"
            render={({ field }) => (
              <FormControl fullWidth>
                <InputLabel>Dano</InputLabel>
                <Select
                  value={field.value}
                  label="Tipo do Dano"
                  onChange={field.onChange}
                  defaultValue={DamageType.Slashing}
                >
                  <MenuItem value={DamageType.Acid}>Ácido</MenuItem>
                  <MenuItem value={DamageType.Bludgeoning}>
                    Contundente
                  </MenuItem>
                  <MenuItem value={DamageType.Cold}>Gélido</MenuItem>
                  <MenuItem value={DamageType.Fire}>Ígneo</MenuItem>
                  <MenuItem value={DamageType.Force}>Força</MenuItem>
                  <MenuItem value={DamageType.Lightning}>Elétrico</MenuItem>
                  <MenuItem value={DamageType.Necrotic}>Necrótico</MenuItem>
                  <MenuItem value={DamageType.Piercing}>Perfurante</MenuItem>
                  <MenuItem value={DamageType.Poison}>Venenoso</MenuItem>
                  <MenuItem value={DamageType.Psychic}>Psíquico</MenuItem>
                  <MenuItem value={DamageType.Radiant}>Radiante</MenuItem>
                  <MenuItem value={DamageType.Slashing}>Cortante</MenuItem>
                  <MenuItem value={DamageType.Thunder}>Trovejante</MenuItem>
                </Select>
              </FormControl>
            )}
          />
          <Controller
            control={control}
            name="diceQuantity"
            render={({ field, fieldState }) => (
              <TextField
                value={field.value}
                onChange={field.onChange}
                label="Quantidade de dados"
                type="number"
                error={!!fieldState.error?.message}
              />
            )}
          />
        </div>
        <div className="flex items-center gap-x-2">
          <Controller
            control={control}
            name="damageDice"
            render={({ field, fieldState }) => (
              <TextField
                value={field.value}
                onChange={field.onChange}
                label="Dano do(s) dados"
                type="number"
                error={!!fieldState.error?.message}
              />
            )}
          />
          <Controller
            control={control}
            name="weight"
            render={({ field, fieldState }) => (
              <TextField
                value={field.value}
                onChange={field.onChange}
                label="Peso (Kg)"
                type="number"
                error={!!fieldState.error?.message}
              />
            )}
          />
        </div>
        <Controller
          control={control}
          name="weaponImage"
          render={({ field: { name, onChange, value } }) => {
            return (
              <TextField
                value={value}
                name={name}
                onChange={onChange}
                label={"Endereço da imagem"}
                type="text"
              />
            );
          }}
        />
        <div className="flex gap-x-8">
          <div className="flex flex-col items-center">
            <span>Nova imagem</span>
            <div className="w-[200px] h-[283px] border-black border flex">
              {currentImage ? (
                <img
                  className="object-cover"
                  alt={"Nova imagem da arma"}
                  src={currentImage}
                />
              ) : (
                <span>Sem imagem</span>
              )}
            </div>
          </div>
        </div>
        <Button
          label="Salvar"
          type="submit"
          className="mt-auto self-center"
          disabled={loading}
        />
      </form>
    </div>
  );
}

export default AddWeaponDrawer;
