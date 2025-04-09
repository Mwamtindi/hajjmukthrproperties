import Link from "next/link";
import { FaEnvelope, FaPhoneAlt} from 'react-icons/fa';

const HeaderTopInfo = function () {
  return (
    <>
      <div className="ltn__top-bar-menu">
        <ul>
          <li>
            <Link href="mailto:hajjmukhtarproperties@gmail.com">
              <FaEnvelope />
              <i></i> hajjmukhtarproperties@gmail.com
            </Link>
          </li>
          <li>
  <Link href="tel:+254720655444">
    <FaPhoneAlt />
    +254720655444
  </Link>
</li>

        </ul>
      </div>
    </>
  );
};

export default HeaderTopInfo;
