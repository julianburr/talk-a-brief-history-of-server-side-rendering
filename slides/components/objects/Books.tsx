import classNames from "classnames";
import { styled } from "~/utils/styling";

const Book = styled("div", {
  position: "absolute",
  bottom: "-70vh",
  borderRadius: "1.4vh",
  transition: "all .6s",

  "& svg": {
    width: "100%",
    height: "auto",
  },

  "& span": {
    position: "absolute",
    transformOrigin: "center",
    rotate: "-90deg",
    translate: "-50% -50%",
    left: "50%",
    top: "50%",
    width: "24vh",
    textAlign: "center",
    fontFamily: "Bebas Neue",
    lineHeight: 1,
    fontSize: "2.5vh",
    color: "$black",
    opacity: 0.2,
  },

  variants: {
    visible: {
      true: {
        bottom: "13.5vh",
      },
    },
  },
});

const BookLeft = styled(Book, {
  width: "8vh",
  height: "43vh",
  background: "#B1A2DA",
  left: "calc(50% - 86.6vh)",
  transformOrigin: "bottom right",
  transform: "rotate(5deg)",

  "&.version2": {
    left: "calc(50% - 94.6vh)",
  },

  "&:before": {
    content: '" "',
    position: "absolute",
    bottom: "10%",
    left: "50%",
    translate: "-50%",
    width: "20%",
    height: "50%",
    borderRadius: "20vh",
    background: "$black",
    opacity: 0.05,
  },

  variants: {
    left: {
      true: {
        "&&": {
          left: "-50%",
        },
      },
    },
  },
});

const BookMiddle = styled(Book, {
  left: "calc(50% - 75vh)",
  width: "10vh",
  height: "50vh",
  background: "#96BCCD",

  "&.version2": {
    left: "calc(50% - 83vh)",
    width: "8vh",
  },

  "&:before": {
    content: '" "',
    position: "absolute",
    bottom: "2.5vh",
    width: "4.5vh",
    height: "4.5vh",
    borderRadius: "1vh",
    background: "$black",
    opacity: 0.05,
    left: "50%",
    translate: "-50%",
  },

  "& span": {
    textAlign: "left",
    top: "59%",
  },

  variants: {
    left: {
      true: {
        "&&": {
          left: "-50%",
        },
      },
    },
  },
});

const BookRight = styled(Book, {
  left: "calc(50% - 65vh)",
  width: "14vh",
  height: "46vh",
  background: "#C9DB97",

  "&.version2": {
    left: "calc(50% - 75vh)",
    width: "10vh",
  },

  "&:before, &:after": {
    content: '" "',
    position: "absolute",
    left: 0,
    width: "100%",
    height: "6vh",
    background: "$black",
    opacity: 0.05,
  },

  "&:before": {
    bottom: "4vh",
  },

  "&:after": {
    top: "4vh",
  },

  variants: {
    left: {
      true: {
        "&&": {
          left: "-50%",
        },
      },
    },
  },
});

const titles = [
  {
    middle: "How to use <marquee> absolutely everywhere",
    right: "HTML for beginners",
  },
  {
    middle: "Wordpress & Magento",
    right: "The magic of jQuery",
  },
  {
    middle: "How to recover mentally from Angular 1",
    right: "React for dummies",
  },
];

type BooksProps = {
  evolution: number;
};

function Books({ evolution }: BooksProps) {
  const className = classNames({
    version1: evolution === 1,
    version2: evolution >= 2,
  });

  const titleMiddle =
    evolution > 0 && titles[evolution - 1]?.middle
      ? titles[evolution - 1].middle
      : null;
  const titleRight =
    evolution > 0 && titles[evolution - 1]?.right
      ? titles[evolution - 1].right
      : null;

  return (
    <>
      <BookLeft
        visible={evolution >= 1}
        className={className}
        left={evolution >= 4}
      />
      <BookMiddle
        visible={evolution >= 1}
        className={className}
        left={evolution >= 4}
      >
        <span>{titleMiddle}</span>
      </BookMiddle>
      <BookRight
        visible={evolution >= 1}
        className={className}
        left={evolution >= 4}
      >
        <span>{titleRight}</span>
      </BookRight>
    </>
  );
}

export { Books };
