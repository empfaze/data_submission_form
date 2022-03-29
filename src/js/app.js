import { create } from "maska";
import { formInit } from "./modules/form/submit-button.js";
import { generateDate } from "./modules/input/date.js";
import { generateEmail } from "./modules/input/email.js";
import { generateName } from "./modules/input/name.js";
import { generatePhone } from "./modules/input/phone.js";
import { outlineInit } from "./modules/utils/outline.js";
import { generatePopups } from "./modules/popup/data.js";

create(".masked");
outlineInit();

generateName();
generateDate();
generatePhone();
generateEmail();

generatePopups();

formInit();
