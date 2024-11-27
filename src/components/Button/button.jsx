import React from "react";

const Button = ({ text, link, wallet, onClick, target, classes, imageClass, id }) => {
    return (
        <div className="w-[100%]">
            {link ? (
                <a
                    href={link}
                    target={target}
                    className="w-[100%]"
                    onClick={(e) => {
                        if (onClick) {
                            e.preventDefault(); 
                            onClick(); 
                        }
                    }}
                >
                    <button
                        type="button"
                        id={id}
                        className={`flex justify-center items-center border border-[#FFD02F] hover:border hover:border-[#FFD02F] hover:text-[#fff] hover:bg-[transparent] ${classes}`}
                    >
                        {wallet && <img className={imageClass} src={wallet} alt="" />}
                        <span>{text}</span>
                    </button>
                </a>
            ) : (
                <button
                    onClick={onClick}
                    type="button"
                    id={id}
                    className={`flex justify-center items-center border border-[#FFD02F] hover:border hover:border-[#FFD02F] hover:text-[#fff] hover:bg-[transparent] ${classes}`}
                >
                    {wallet && <img className={imageClass} src={wallet} alt="" />}
                    <span>{text}</span>
                </button>
            )}
        </div>
    );
};

export default Button;
