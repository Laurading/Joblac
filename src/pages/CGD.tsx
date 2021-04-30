import { IonPage, IonContent, IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton } from '@ionic/react';
import React, { useContext } from "react";

const CGD: React.FC = () => {


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>
            <img src="././assets/img/Joblac.png" />
          </IonTitle>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <div className="background">
          <h3>Conditions générales d'utilisation</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam finibus lorem nulla, sit amet sollicitudin tortor aliquet ac. Ut sit amet tincidunt risus. Proin vitae sapien mollis velit rhoncus porta non non ligula. Nullam maximus arcu enim, a ullamcorper felis rutrum nec. Nulla eros eros, elementum a varius sed, sagittis eu orci. Duis imperdiet mattis ante at eleifend. Donec lectus est, lacinia sit amet efficitur a, luctus nec nisl. Nunc vulputate pharetra velit sed laoreet.
            <br /><br/>
            Donec posuere sem arcu, ultricies laoreet est dictum nec. Mauris vel orci dui. Nunc id metus leo. In sem sapien, condimentum in turpis vel, fermentum varius enim. Fusce varius risus eleifend sodales imperdiet. Praesent sem ex, cursus scelerisque felis et, malesuada gravida eros. Pellentesque luctus non lectus sit amet placerat. Ut rutrum lobortis rhoncus. Mauris sit amet fermentum libero, ut interdum arcu. Duis sed aliquam magna. Curabitur feugiat, dolor eget finibus rhoncus, augue tortor dignissim turpis, nec vestibulum ligula augue et nulla. Vivamus sagittis nisl ac rutrum rhoncus. In hac habitasse platea dictumst. Curabitur viverra venenatis lorem ut sodales.
            <br/><br/>
            Donec mi nibh, vehicula quis ultricies sed, rutrum id elit. Morbi rhoncus eros et mauris facilisis, eu facilisis ex tincidunt. Mauris tincidunt purus congue urna viverra elementum. Ut commodo cursus enim eu aliquam. Aenean a aliquam purus. Nunc quis congue magna. In hac habitasse platea dictumst. Aenean interdum mauris eget lacus rutrum, id sodales est varius. Aenean porta libero non purus commodo, ut scelerisque diam egestas. Ut mollis libero lectus, id lacinia eros imperdiet quis. Cras blandit arcu nec diam molestie, eget fringilla diam varius. Proin rhoncus, diam ac blandit tincidunt, eros arcu commodo sapien, eget iaculis orci quam ultrices metus. Morbi pharetra purus id neque varius, eu placerat mauris ultrices. Vestibulum quis ipsum metus. Phasellus congue nulla vel nisi maximus bibendum.
            <br/><br/>
            Vestibulum imperdiet massa quam, non varius nisi auctor non. Proin quis dui et tellus venenatis lacinia. Pellentesque eget tincidunt odio, id ornare odio. Aenean eget lectus risus. Duis molestie interdum eros in dictum. Duis elementum urna ut sapien mollis, imperdiet pretium leo mollis. Aliquam sagittis tortor sit amet magna auctor, vel bibendum erat ullamcorper. Suspendisse porttitor a nulla non porta. Morbi eu lectus arcu. Cras convallis turpis ac enim feugiat condimentum. Fusce quis purus laoreet, aliquam nisl a, accumsan tellus. Duis sed ipsum consequat, cursus risus id, pretium enim. Morbi pharetra purus quis porta tempus. Vestibulum varius nisl nec diam tincidunt, vitae finibus libero varius.
            <br/><br/>
            Maecenas dictum tincidunt libero, ac interdum nulla elementum venenatis. Donec eleifend ac leo eu auctor. Donec elementum massa at efficitur tempus. Suspendisse fermentum libero a est consequat scelerisque. Nulla posuere finibus porta. Sed at blandit erat. Morbi sit amet felis sem. In ante nisl, vestibulum quis metus id, faucibus gravida purus. Aliquam vel fringilla leo. Duis rutrum at eros quis venenatis. Pellentesque dignissim lectus rhoncus est aliquam egestas. Aenean a vehicula purus, et laoreet felis. Aliquam eu auctor libero. Morbi eu ligula ac lacus pellentesque sodales.</p>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default CGD;