clear all, close all
P1 = [0,0,0];
P2 = 1 * [0, sin(pi/6),cos(pi/6)];
P3 = 1 * [0,-sin(pi/6),cos(pi/6)];
P4 = 1 * [sin(pi/6),0,2*cos(pi/6)/3];
P5 = 1 * [-sin(pi/6),0,2*cos(pi/6)/3];

V1 = 0;
V2 = 0.35;
V3 = 0.4;
V4 = 0.15;
V5 = 0.15;

g1 = [P1;P2;P3;P4]\[V1;V2;V3;V4]%of right tetrahedron
g2 = [P1;P2;P3;P5]\[V1;V2;V3;V5]




figure(1)
plot3([P1(1);P2(1)],[P1(2);P2(2)],[P1(3);P2(3)],'--k','MarkerSize',30,'LineWidth',2)
hold on
plot3([P2(1);P3(1);P1(1)],[P2(2);P3(2);P1(2)],[P2(3);P3(3);P1(3)],'.-k','MarkerSize',30,'LineWidth',2)
plot3([P1(1);P4(1)],[P1(2);P4(2)],[P1(3);P4(3)],'.-k','MarkerSize',30,'LineWidth',2)
plot3([P2(1);P4(1)],[P2(2);P4(2)],[P2(3);P4(3)],'.-k','MarkerSize',30,'LineWidth',2)
plot3([P3(1);P4(1)],[P3(2);P4(2)],[P3(3);P4(3)],'.-k','MarkerSize',30,'LineWidth',2)
quiver3(0,0,0,g1(1),g1(2),g1(3),'-r','LineWidth',2)
%
plot3([P1(1);P5(1)],[P1(2);P5(2)],[P1(3);P5(3)],'.-k','MarkerSize',30,'LineWidth',2)
plot3([P2(1);P5(1)],[P2(2);P5(2)],[P2(3);P5(3)],'.-k','MarkerSize',30,'LineWidth',2)
plot3([P3(1);P5(1)],[P3(2);P5(2)],[P3(3);P5(3)],'.-k','MarkerSize',30,'LineWidth',2)
quiver3(0,0,0,g2(1),g2(2),g2(3),'-b','LineWidth',2)

P = [P1;P2;P3;P4;P5];
for i=1:5
    text(P(i,1)+0.01,P(i,2),P(i,3)-0.015,['  ',num2str(i)],'FontSize',32,'Color','k')
end
axis equal
axis off