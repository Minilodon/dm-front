import React, { forwardRef, useMemo, useState } from "react";
import Skeleton from "react-loading-skeleton";
import Icon from "../Icon/Icon";
import Container from "./components/Container";
import Wrapper from "./components/Wrapper";
import LeftIcon from "./components/LeftIcon";
import InputContainer from "./components/InputContainer";
import LoadingContainer from "./components/LoadingContainer";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import clsx from "clsx";

export interface InputProps {
  error?: string;
  label?: string;
  rightIcon?: React.ReactNode;
  leftIcon?: React.ReactNode;
  width?: string;
  name?: string;
  loading?: boolean;
  onChange: (value: string | null) => void;
  value?: string | null;
  placeholder?: string;
  type?: string;
  id?: string;
  disabled?: boolean;
  minLength?: number;
  maxLength?: number;
  activeLabel?: boolean;
  required?: boolean;
  autoComplete?: "on" | "off" | "new-password";
  className?: string;
  testId?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(function InputV2(
  props,
  ref
) {
  const {
    placeholder,
    type = "text",
    rightIcon,
    leftIcon,
    value,
    onChange,
    error,
    name,
    id,
    label,
    width,
    loading,
    disabled,
    minLength,
    maxLength,
    activeLabel,
    required,
    autoComplete = "new-password",
    className,
    testId,
  } = props;

  const [showPassword, setShowPassword] = useState(false);

  const inputType = useMemo(() => {
    if (type === "password") {
      return showPassword ? "text" : "password";
    }

    return type;
  }, [showPassword, type]);

  function handleShowPassword() {
    setShowPassword(!showPassword);
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const emptyValue = event.target.value === "";

    if (emptyValue) {
      onChange(null);
    } else {
      onChange(event.target.value);
    }
  };

  return (
    <Wrapper>
      <Container hasLabel={!!label} width={width} disabled={disabled}>
        {leftIcon && (
          <LeftIcon>
            <Icon>{leftIcon}</Icon>
          </LeftIcon>
        )}
        <InputContainer>
          {loading ? (
            <LoadingContainer>
              <Skeleton width="100%" height="100%" />
            </LoadingContainer>
          ) : (
            <>
              <input
                min={minLength}
                maxLength={maxLength}
                type={inputType}
                placeholder={placeholder ?? " "}
                value={value ?? ""}
                onChange={handleChange}
                name={name ?? label?.toLowerCase().replaceAll(" ", "-")}
                id={id ?? name ?? label?.toLowerCase().replaceAll(" ", "-")}
                ref={ref}
                disabled={disabled}
                autoComplete={autoComplete}
                data-testid={
                  testId ??
                  id ??
                  name ??
                  label?.toLowerCase().replaceAll(" ", "-")
                }
                className="peer absolute top-0 left-0 w-full border-none flex-1 bg-transparent px-[14px] py-2 font-normal text-base leading-6 border border-black shadow-sm focus:border-red"
              />
              {label && (
                <label
                  className={clsx(
                    "absolute top-1/2 left-[0.8rem] cursor-text font-normal text-base leading-4 text-[#667085] px-[0.1rem] transition peer-focus:text-xs peer-focus:top-[-0.4rem] peer-focus:bg-white peer-focus:font-medium peer-focus:translate-y-0 peer-focus:left-[0.8rem]",
                    !!leftIcon && "left-8",
                    activeLabel || (!!label && !!placeholder)
                      ? "text-xs top-[-0.4rem] bg-white font-medium"
                      : "-translate-y-1/2"
                  )}
                  htmlFor={
                    id ?? name ?? label?.toLowerCase().replaceAll(" ", "-")
                  }
                >
                  {label} {required && <b>*</b>}
                </label>
              )}
            </>
          )}
        </InputContainer>
      </Container>
      {error && <ErrorMessage message={error} />}
    </Wrapper>
  );
});

export default Input;
