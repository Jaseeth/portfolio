export default function RegistrationVisual() {
  return <svg viewBox="0 0 500 220" fill="none">
    <g stroke="currentColor">
      <rect x="20" y="22" width="147" height="178" rx="11" fill="#0f1417" strokeOpacity=".4"/>
      <path d="M20 49H167M36 36H84" strokeOpacity=".5"/>
      <rect x="38" y="65" width="111" height="37" rx="5" fill="currentColor" fillOpacity=".08" strokeOpacity=".25"/>
      <path d="M49 79H99M49 89H128M38 119H149M38 137H149M38 155H111" strokeOpacity=".5"/>
      <rect x="38" y="172" width="64" height="12" rx="4" fill="currentColor" fillOpacity=".3" stroke="none"/>
      <path d="M174 111H190M184 105L190 111L184 117" strokeOpacity=".5"/>
      <rect x="197" y="35" width="153" height="150" rx="11" fill="#0f1417" strokeOpacity=".4"/>
      <path d="M197 62H350M213 49H264" strokeOpacity=".5"/>
      {[81, 111, 141].map(y => <g key={y}>
        <rect x="213" y={y} width="121" height="23" rx="4" fill="currentColor" fillOpacity=".07" stroke="none"/>
        <path d={`M223 ${y + 8}H271M223 ${y + 15}H258`} strokeOpacity=".45"/>
        <path d={`M307 ${y + 11}L311 ${y + 15}L319 ${y + 7}`} strokeOpacity=".7"/>
      </g>)}
      <path d="M357 111H373M367 105L373 111L367 117" strokeOpacity=".5"/>
      <rect x="381" y="47" width="99" height="136" rx="10" fill="#0f1417" strokeOpacity=".5"/>
      <path d="M414 47V39H447V47" strokeOpacity=".4"/>
      <rect x="397" y="64" width="67" height="45" rx="5" fill="currentColor" fillOpacity=".12" strokeOpacity=".3"/>
      <path d="M411 80H450M411 93H438M397 124H464M397 135H447" strokeOpacity=".5"/>
      <path d="M397 150H414V167H397ZM402 155H409V162H402ZM439 150H456V167H439ZM444 155H451V162H444ZM421 151V159H432V167H422" strokeOpacity=".65"/>
    </g>
  </svg>
}
