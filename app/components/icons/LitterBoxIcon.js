import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {Colors} from '../../../Styles';

function LitterboxIcon(props) {
  return (
    <Svg
      height={250}
      width={250}
      viewBox="0 0 320 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M13 131v87.336a1 1 0 0 0 .611.922L164.758 283M13 131l52.089 24.906M13 131l53.591-21.441M164.758 283l141.652-63.735a1 1 0 0 0 .59-.912V146M164.758 283l3.005-78M307 146 144.223 78.5M307 146l-32.586 13.801a.997.997 0 0 0-.584.697L271.196 172M144.223 78.5v43.34m0-43.34-7.513 3.006M167.763 205l36.195-15.137a1 1 0 0 1 1.283.482l11.694 23.815a1 1 0 0 0 1.278.484l47.239-19.447c.3-.124.521-.385.594-.702l5.15-22.495m-103.433 33-32.416-15.5m-70.258-33.594S64.29 136.413 72.6 136c4.992-.248 6.588 4.689 11.52 5.5 8.738 1.438 11.019-13.5 18.031-10.5 2.096.897 1.365 4.417 3.005 6 6.242 6.029 10.017-15.5 18.03-14 3.733.699 2.758 5.924 6.511 6.5 5.577.857 9.685-6.724 14.525-7.66m-79.134 34.066 20.535 9.819M271.196 172s-7.269-4-18.288-1c-5.798 1.579-.827-18.404-9.516-19.5-4.78-.603-6.878 5.693-11.52 4.406-5.7-1.58-3.005-10.406-7.012-13.406-5.5-4.118-17.623 9.943-24.541 3.5-3.719-3.463.04-10.23-4.508-12.5-5.009-2.5-21.036 10-26.044 2.5-2.17-3.249 1.421-6.905-1.503-9.5-4.508-4-10.017 7-16.528 4.5-3.868-1.485-1.077-7.692-5.009-9a4.851 4.851 0 0 0-2.504-.16m-38.065 34.066s5.267-12.824 10.518-10.406c2.665 1.227 4.508 6 4.508 6m13.022 11.5s3.846-7.449 8.014-7.094c4.745.404-2.504 10.282 3.005 8.688C150.734 163 155.242 154 160.751 158.5m-5.509 18.5s9.885-4.112 12.521 0c1.687 2.631 0 8 0 8m16.528-15s8.051-10.956 11.52-7c2.319 2.645 0 9 0 9m22.037 1.5c4.642-4.54 9.016.5 13.023-5m-4.007 26.5s-1.526-8.144 2.003-10c3.638-1.914 5.868 6.394 9.516 4.5 3.129-1.624-.216-7.069 3.005-8.5 3.358-1.491 8.515 4 8.515 4M24.019 196.5v8.5m16.027-3v3m-10.017 5.5 1.503 6m123.71-1.5v4m-10.017 4v5m33.056 37.5 6.01-3m105.179-96 6.01-3.5m0 9v7M66.591 109.559c-2.083-9.959-1.025-14.462 5.622-19.754.242-.193.388-.486.388-.795V78.278a1 1 0 0 1 1.52-.855l9.411 5.72c.355.215.805.188 1.135-.063 5.782-4.405 9.883-6.09 18.504-6.555.303-.017.587-.168.765-.414l9.403-12.963a1 1 0 0 1 1.635.022l5.433 7.927c.174.255.46.414.767.435 8.831.618 12.406 2.879 15.536 9.974m-70.119 28.053 24.041-9.618m46.078-18.435-28.548 11.421m-17.53-.427v7.44m0 0 17.53-7.013m0-6.427v6.427"
        stroke={Colors._100}
        strokeWidth={4}
        strokeLinecap="round"
      />
    </Svg>
  );
}

export default LitterboxIcon;
