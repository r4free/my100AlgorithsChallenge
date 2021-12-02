function areEqualyStrong(leftHand : number, rightHand : number, partnerLeftHand : number , partnerRightHand :number) : boolean {
    return (leftHand + rightHand) == (partnerLeftHand + partnerRightHand)
}

function areEqualyStrong2(leftHand : number, rightHand : number, partnerLeftHand : number , partnerRightHand :number) : boolean {
    const strongestArm = leftHand >=  rightHand ? leftHand : rightHand
    const strongestPartnerArm = partnerLeftHand >=  partnerRightHand ? partnerLeftHand : partnerRightHand
    const weakestArm = leftHand <=  rightHand ? leftHand : rightHand
    const weakestPartnerArm = partnerLeftHand <=  partnerRightHand ? partnerLeftHand : partnerRightHand
    return strongestArm === strongestPartnerArm && weakestArm === weakestPartnerArm
}

console.log(areEqualyStrong(15,16,13,18))
console.log(areEqualyStrong2(30,16,16,30))