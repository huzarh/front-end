import * as React from "react";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    // boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    boxShadow: `0 0 0 2px #131419`,

    // "&::after": {
    //   position: "absolute",
    //   top: -1,
    //   left: -1,
    //   width: "100%",
    //   height: "100%",
    //   borderRadius: "50%",
    //   animation: "ripple 1.2s infinite ease-in-out",
    //   border: "1px solid currentColor",
    //   content: '""',
    // },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(1.5)",
      opacity: 0,
    },
  },
}));

export default function ActiveAvatar() {
  const users = ['Sen','Khuzair','Keram','Meli','Blaah','Yesh','Mustafa','Abdurahman']
  return (
    <Stack
      direction="row"
      spacing={1.5}
      sx={{
        cursor:"pointer",
        top: 60,
        width: "100%",
        overflowY: "scroll",
      }}
    >
      {users.map((e, i) => (
        <div key={i} style={{display:"flex",flexDirection:"column",alignItems:"center",border: "2px solid #5e13ff",borderRadius: 15, padding: 8}}>
          <StyledBadge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            variant="dot"
          >
            <Avatar alt="Remy Sharp" sx={{ width: 40, height: 40 }} src={`https://robohash.org/${i}?set=set5&size=180x180`}/>
          </StyledBadge>
          <p>{e}</p>
        </div>
      ))}
    </Stack>
  );
}
